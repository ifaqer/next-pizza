import { Container } from "@/components/shared";
import {Title} from '../components/shared/index'
import { Categories } from './../components/shared/categories';
import { SortPopup } from './../components/shared/sort-popup';
import { TopBar } from './../components/shared/top-bar';
import { Filters } from "@/components/shared/filters";

export default function Home() {
  return (
    <>
    <Container className="mt-8">
      <Title text="Все пиццы" size="lg" className="font-bold"/>
    </Container>
    <TopBar/>
    <Container className="pb-14 flex gap-[60px]">
        <div className="w-[250px]">
          <Filters/>
        </div>
        <div className="flex=1">
          <div className="flex flex-col gap-16">Список товаров</div>
        </div>
    </Container>
    </>
  );
}
