import React, {useState} from 'react';

import CategorySelect, {SelectContainer} from 'components/CategorySelect';
import PetitionStatus from 'components/PetitionStatus';
import PetitionList from 'components/PetitionList';
import ComponentTitle from 'components/ComponentTitle';

import Category from 'data/Category';

const CategoryPage = () => {
  const [filter, setFilter] = useState<Category>(Category.General);

  return (
    <>
      <PetitionStatus />

      <ComponentTitle>청원 분야별 보기</ComponentTitle>
      <SelectContainer>
        <CategorySelect onChangeSelect={(c) => setFilter(c)} />
      </SelectContainer>

      <PetitionList title="진행중인 청원" perPage={8} categoryFilter={filter} />
      <PetitionList title="답변 대기 중인 청원" perPage={5} categoryFilter={filter} />
    </>
  );
};

export default CategoryPage;
