const SingleDrinkPage = async ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1 className="text-7xl">{params.id}</h1>
    </div>
  );
};

export default SingleDrinkPage;
