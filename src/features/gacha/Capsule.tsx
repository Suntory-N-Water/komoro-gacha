type CapsuleProps = {
  readonly open: boolean;
};

export default function Capsule({ open }: CapsuleProps) {
  return (
    <div className="relative h-28 w-27 animate-capsule-drop">
      <div
        className={[
          "absolute top-0 left-0 h-14 w-27 rounded-t-full bg-[linear-gradient(155deg,#f8f0e0_0%,#e8d8b8_55%,#d4c098_100%)] shadow-[0_-2px_16px_rgba(180,150,100,0.3)]",
          open ? "animate-capsule-open-top" : "",
        ].join(" ")}
      >
        <div className="absolute top-2.25 left-5.5 h-3 w-7 rotate-[-15deg] rounded-full bg-white/45" />
      </div>
      <div className="absolute top-13.25 right-2.5 left-2.5 z-10 h-1.5 rounded-[3px] bg-linear-to-r from-transparent via-[#e8d4a8] to-transparent shadow-[0_0_10px_rgba(180,150,100,0.5)]" />
      <div className="absolute bottom-0 left-0 h-14 w-27 rounded-b-full bg-[linear-gradient(155deg,#4a8a5c_0%,#3d6b4a_60%,#2e5038_100%)] shadow-[0_5px_20px_rgba(61,107,74,0.35)]" />
    </div>
  );
}
