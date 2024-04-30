import { useEffect } from "react";
import { useCustomSWR } from "./hooks/useCustomSWR";
import {
  TRequestCalender,
  TRequestDoa,
  TRequestSholat,
  TResponse,
  TResponseCalender,
  TResponseDoa,
  TResponseSholat,
} from "./types";
import { getDateAPI } from "./utils/getDate";
import Carousel from "./components/carousel";

function App() {
  const ayat = useCustomSWR(`quran/ayat/acak`);
  const doa = useCustomSWR<TResponse<TRequestDoa, TResponseDoa>>(`doa/acak`);

  const schedule = useCustomSWR<TResponse<TRequestSholat, TResponseSholat>>(
    `sholat/jadwal/1301/${getDateAPI()}`
  );

  const calenderHijrah =
    useCustomSWR<TResponse<TRequestCalender, TResponseCalender>>(
      `cal/hijr/?adj=-1`
    );

  useEffect(() => {
    console.log(schedule.data);
  }, []);

  if (schedule.data) {
    console.log(schedule.data.data);
  }

  console.log(doa.data?.data);
  console.log(calenderHijrah.data?.data);

  return (
    <>
      <h1>TESSSSSSSSSS</h1>
      {schedule.data && <div>{schedule.data.data.jadwal.dzuhur}</div>}
      <Carousel />
    </>
  );
}

export default App;
