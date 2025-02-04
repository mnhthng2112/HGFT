import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <div className="banner">
          <Image
            className="object-contain"
            src="/images/home-banner.jpg"
            alt="Next.js logo"
            width={1949}
            height={1178}
            priority
          />
        </div>

        <div className="bg-event text-white">
          <div className="container !max-w-[1280px] -mt-[100px]">
            <Link href="/" className="bg-card block">
              <div className="">
                <Image
                  className="object-cover"
                  src="/images/event-1.jpg"
                  alt="Next.js logo"
                  width={1281}
                  height={669}
                  priority
                />
              </div>
              <div className="grid grid-cols-4">
                  <div className="p-8 col-span-3 ml-4">
                    <div className="uppercase text-2xl">
                      sự kiện kết nối giao thương&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;   
                      <span className="text-base">20.10.2025</span>
                    </div>
                    <div className="font-light mt-2">
                      Mở rộng đầu tư ngành game khu vực Đồng bằng sông Cửu Long
                    </div>
                  </div>
                  <div className="grid uppercase text-[24px] place-items-center">
                    Xem ngay >>
                  </div>
              </div>
            </Link>
          </div>
        </div>
    </div>
  );
}
