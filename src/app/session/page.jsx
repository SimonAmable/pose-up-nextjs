import VideoCall from "../components/VideoCall";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white">
      <h1>Posture Strictness</h1>
      <VideoCall/>
    </div>
  );
}
