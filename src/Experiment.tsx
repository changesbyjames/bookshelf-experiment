import type {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  SVGAttributes,
} from "react";

const ShelfBackground: FC<PropsWithChildren<SVGAttributes<SVGSVGElement>>> = (
  props,
) => {
  return (
    <svg
      {...props}
      preserveAspectRatio="none"
      viewBox="0 0 349 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.5 0L315 0L348.5 25H0L31.5 0Z"
        fill="url(#paint0_linear_0_1)"
      />
      <rect y="25" width="349" height="10" fill="#4E564B" />
      <defs>
        <linearGradient
          id="paint0_linear_0_1"
          x1="636"
          y1="30"
          x2="636"
          y2="-1.78814e-06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6D7369" />
          <stop offset="1" stop-color="#949F8E" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Hardback: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  children,
  className,
  style,
  ...props
}) => {
  return (
    <div
      {...props}
      style={{
        boxShadow: "0px 11px 20px 4px rgba(0, 0, 0, 0.20)",
        ...style,
      }}
      className={`
        relative z-10 aspect-[6/9] h-full rounded-sm bg-[#3E4149] bg-cover
        bg-center bg-no-repeat
        ${className}
      `}
    >
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 1.23%, rgba(255, 255, 255, 0.00) 98.46%, rgba(255, 255, 255, 0.20) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 0.79%, rgba(255, 255, 255, 0.30) 1.36%, rgba(255, 255, 255, 0.10) 1.94%, rgba(255, 255, 255, 0.10) 2.78%, rgba(0, 0, 0, 0.10) 4.01%, rgba(255, 255, 255, 0.10) 5.02%, rgba(255, 255, 255, 0.20) 5.53%, rgba(255, 255, 255, 0.10) 5.94%, rgba(254, 254, 254, 0.00) 6.43%, rgba(255, 255, 255, 0.00) 98.73%, rgba(255, 255, 255, 0.20) 100%)",
        }}
        className="absolute inset-0 rounded-sm"
      />
      <div
        style={{
          backgroundImage: "url('/texture.jpeg')",
        }}
        className="absolute inset-0 rounded-sm bg-cover bg-center bg-no-repeat opacity-40 mix-blend-hard-light"
      />
      {children}
    </div>
  );
};

const Shelf: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative flex h-64 w-full items-center justify-center p-4 pb-[1.2rem]">
      {children}
      <ShelfBackground className="absolute bottom-0 h-8 w-[160%]" />
    </div>
  );
};

const Experiment = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F8EEE7] px-8">
      <div className="grid w-full max-w-4xl grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-8 px-12">
        <Shelf>
          <Hardback
            style={{
              backgroundImage:
                "url('https://m.media-amazon.com/images/I/71C5WVrvmYL._AC_UF894,1000_QL80_.jpg')",
            }}
          />
        </Shelf>
        <Shelf>
          <Hardback
            style={{
              backgroundImage:
                "url('https://m.media-amazon.com/images/I/91k8yvCMaxL._AC_UF894,1000_QL80_.jpg')",
            }}
          />
        </Shelf>
        <Shelf>
          <Hardback />
        </Shelf>
        <Shelf>
          <Hardback />
        </Shelf>
        <Shelf>
          <Hardback />
        </Shelf>
        <Shelf>
          <Hardback />
        </Shelf>
      </div>
    </main>
  );
};

export default Experiment;
