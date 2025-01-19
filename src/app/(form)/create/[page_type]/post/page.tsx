"use client";
import React from 'react';
import {useSubmit} from "@/hooks/form/useSubmit";
import {useParams} from "next/navigation";
import {MentoringPostFormFields} from "@/app/(form)/model/MentoringPostFormFields";
import {ProjectPostFormFields} from "@/app/(form)/model/ProjectPostFormFields";
import FormTitle from "@/app/(form)/_components/FormTitle";
import PostForm from "@/app/(form)/_components/PostForm";
import {MentoringPost, ProjectPost} from "@/app/(form)/_type/formDataTypes";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";

const Page = () => {
  // 경로(page_type)에 따라 다른 페이지 출력
  const { page_type } = useParams();
  const isProject = page_type === "project";
  const formFields = isProject ? ProjectPostFormFields : MentoringPostFormFields;
  const endPoints = isProject ? "/project/1/post" : "/mentoring/1/post"

  // useForm 제네릭 타입 지정
  const { control, register, handleSubmit, formState: { errors } } = useForm<ProjectPost | MentoringPost>();

  // 데이터 패칭
  const { submit, isLoading, error } = useSubmit<MentoringPost | ProjectPost>({
    endpoint: endPoints,
    formatPayload: (formData) => {
      return isProject
          // 프로젝트 데이터
          ? {
            projectName: (formData as ProjectPost).projectName,
            deadline: (formData as ProjectPost).deadline,
            memberCnt: (formData as ProjectPost).memberCnt,
            link: (formData as ProjectPost).link,
            contents: (formData as ProjectPost).contents,
          }
          // 멘토링 데이터
          : {
            name: (formData as MentoringPost).name,
            deadline: (formData as MentoringPost).deadline,
            mentoringCnt: (formData as MentoringPost).mentoringCnt,
            link: (formData as MentoringPost).link,
            contents: (formData as MentoringPost).contents,
          }
    },
    onSuccess: () => alert("게시글이 작성되었습니다.")
  });

  const onSubmit: SubmitHandler<ProjectPost | MentoringPost> = (data) => {
    submit(data);
  };

  return (
      <>
        <FormTitle
            highlight={isProject ? "프로젝트" : "멘토링"}
            title="게시글 작성에 필요한 정보를 입력해주세요."
        />
        <PostForm
            onSubmit={(data) => onSubmit(data)}
            formFields={formFields}
            control={control}
            register={register}
        />
        {error && <p className="text-red-500">{(error as Error).message}</p>}
        {isLoading && <p className="text-blue-500">팀 생성 중...</p>}
      </>
  );
};

export default Page;