import { Container } from "@/components/shared";
import {Title} from '../components/shared/index'
import { Categories } from './../components/shared/categories';
import { SortPopup } from './../components/shared/sort-popup';
import { TopBar } from './../components/shared/top-bar';

export default function Home() {
  return (
    <>
    <Container className="mt-8">
      <Title text="Все пиццы" size="lg" className="font-bold"/>
    </Container>
    <TopBar/>
    <Container className="pb-14">
      f
    </Container>
    </>
  );
}
