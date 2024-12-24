export default interface ProjectPost {
  title: string; // 게시글 제목
  teamName: string; // 게시글을 작성한 팀 이름
  startDate: string; // 프로젝트 시작일
  endDate: string; // 프로젝트 마감일
  deadline: string; // 프로젝트 모집마감일
  memberCnt: number; // 구인중인 멤버의 수
  link: string; // 연락방법
  contents: string; // 게시글 컨텐츠
  postStatus: string; // 게시글 상태 ( 모집중, 모집완료 )
  projectTeamId: number; // 게시글을 올린 프로젝트의 팀 ID
  postId: number; // 게시글 ID
  stackIds: string[]; // 기술스택 리스트
  recruitCategories: string[]; // 모집구분 리스트
}
