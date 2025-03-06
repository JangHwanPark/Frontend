'use client';
import React, {useEffect} from "react";
import InputField from "@/components/Input/TextInput/InputField";
import {PROJECT_STEP1, PROJECT_STEP2} from "@/data/form/project";
import SelectCheckBox from "@/components/Input/SelectCheckBox/SelectCheckBox";
import TextareaField from "@/components/Input/TextArea/TextareaField";
import Select from "@/components/Input/Select";
import {formatDate, getSelectableDays, getSelectableMonths} from "@/service/date/date";
import { useDateStore } from "@/store/useDateStore";

const memberOptions = Array.from({ length: 10 }, (_, i) => i + 1);

const ProjectForm = ({
  currentStep,
  control,
  setValue
}) => {
  const { startMonth, startDay, endMonth, endDay, updateStartDate, updateEndDate } = useDateStore();
  
  const months = getSelectableMonths() || [];
  const startDays = getSelectableDays(startMonth, 0) || [];
  const endDays = getSelectableDays(endMonth, 30, undefined, 30) || [];
  console.log(startMonth, startDay, endDay, updateStartDate);
  
  // React Hook Form과 Zustand 동기화
  useEffect(() => {
    setValue("startDate", formatDate(new Date().getFullYear(), startMonth, startDay));
    setValue("endDate", formatDate(new Date().getFullYear(), endMonth, endDay));
  }, [startMonth, startDay, endMonth, endDay, setValue]);
  
  return (
    <>
      {currentStep === 1 && PROJECT_STEP1.map(field => (
        <React.Fragment key={field.name}>
          {!field.options && (
            <InputField
              name={field.name}
              label={field.label}
              control={control}
              rules={field.rules}/>
          )}
          {field.options && (
            <div className="py-2 flex flex-col w-full">
              <p className='mb-2'>
                프로젝트 {field.options === 'start' ? '시작일' : '종료일'}
              </p>
              <div className='w-full flex items-center gap-5'>
                <Select
                  label='월'
                  name={field.options === 'start' ? 'startMonth' : 'endMonth'}
                  options={months}
                  value={field.options === "start" ? startMonth : endMonth}
                  onChange={(month) => {
                    if (field.options === "start") {
                      updateStartDate(month, startDay);
                    } else {
                      updateEndDate(month, endDay);
                    }
                  }}/>
                <Select
                  label="일"
                  name={field.options === "start" ? "startDay" : "endDay"}
                  options={field.options === "start" ? startDays : endDays}
                  value={field.options === "start" ? startDay : endDay}
                  onChange={(day) => {
                    if (field.options === "start") {
                      updateStartDate(startMonth, day);
                    } else {
                      updateEndDate(endMonth, day);
                    }
                  }}/>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
      {/* Todo 프로젝트 시작 종료일 셀렉트 박스로 변경 */}
      {currentStep === 2 && PROJECT_STEP2.map(field => (
        <React.Fragment key={field.name}>
          {!field.options && field.name !== 'memberCnt' && (
            <InputField
              name={field.name}
              label={field.label}
              control={control}
              rules={field.rules}
            />
          )}
          {field.name === 'memberCnt' && (
            <div className="py-2 flex flex-col w-full">
              <p className='mb-2'>모집 인원</p>
            <Select
              label="명"
              name='memberCnt'
              options={memberOptions}
              control={control}
              onChange={(value) => setValue("memberCnt", value)}/>
            </div>
          )}
          {field.options && (
            <div className="w-full">
              <label htmlFor="stacks">기술스택</label>
              <SelectCheckBox
                name={field.name}
                placeholder="사용가능한 기술스택을 선택해주세요."
                checkBoxList={field.options}
                control={control}
                maximum={8}
              />
            </div>
          )}
        </React.Fragment>
      ))}
      
      {currentStep === 3 && (
        <TextareaField
          label="소개"
          name={"contents"}
          placeholder="프로젝트 소개를 입력해 주세요."
          control={control}/>
      )}
      
      {currentStep === "submit" && (
        <>
          ㅅㄷㄴㅅ
        </>
      )}
    </>
  );
};

export default ProjectForm;