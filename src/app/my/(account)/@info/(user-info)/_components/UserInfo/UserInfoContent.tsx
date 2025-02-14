import SelectBoxField from "@/types/selectBoxField";
import UserInfoItem from "@/app/my/(account)/@info/(user-info)/_components/ui/UserInfoItem";

interface UserInfoContentProps {
  name: string;
  waringCnt: number;
  introduce: string;
  stacks: SelectBoxField[];
}

const UserInfoContent = ({
  name,
  waringCnt,
  introduce,
  stacks,
}: UserInfoContentProps) => {
  return (
      <div className="grid grid-cols-2 grid-rows-2 gap-5 lg:grid-rows-3">
        {/*<div className="flex mb-4">

        </div>*/}
        <UserInfoItem
            label="닉네임"
            value={name}/>
        <UserInfoItem
            label="경고횟수"
            value={waringCnt > 0 ? String(waringCnt) : "0"}/>
        <UserInfoItem
            label="자기소개"
            as="article"
            className="lg:col-span-2">
          {introduce.length === 0
              ? "아직 소개를 작성하지 않았습니다. 팀원들에게 나를 소개하는 글을 작성해보세요"
              : introduce}
        </UserInfoItem>

        <UserInfoItem
            label="기술스택"
            as="article"
            className="lg:col-span-2">
          {stacks.length === 0
              ? "선택된 기술스택이 없습니다."
              : stacks.map((stack) => (
                  <span
                      className="border rounded-md 00 p-2 mr-2"
                      key={stack.value}>
                  {stack.label}
                </span>
              ))}
        </UserInfoItem>
      </div>
  );
};

export default UserInfoContent;
