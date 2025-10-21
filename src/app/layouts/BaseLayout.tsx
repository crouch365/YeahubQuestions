import QuestionList from "@/widgets/questions/ui/QuestionList";
import { Header } from "@/widgets/header";

function BaseLayout() {
  return (
    <div>
      <Header />
      <QuestionList />
    </div>
  );
}

export default BaseLayout;
