import usegametrailer from "../Hooks/usegametrailer";

interface props {
  gameId: number;
}
const GameTrailer = ({ gameId }: props) => {
  const { data, error, isLoading } = usegametrailer(gameId);
  if (isLoading) return null;
  if (error) throw error;
  if (!data || data.results.length === 0) return null;
  const first = data?.results[0];
  return (
    <>
      <video src={first.data.max} poster={first.preview} controls></video>
    </>
  );
};

export default GameTrailer;
