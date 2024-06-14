import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-[663px] h-[63px]">
      <div className="flex gap-[9px] w-[88px] h-[19px]">
        <Image
          src="/home_FILL0_wght300_GRAD0_opsz24.svg"
          width={16}
          height={17}
          alt="home"
        />

        <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left">
          Overview
        </p>
      </div>

      <div className="flex gap-[9px] w-[88px] h-[19px]">
        <Image
          src="/group_FILL0_wght300_GRAD0_opsz24.svg"
          width={24}
          height={17}
          alt="home"
        />
        <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left">
          Patients
        </p>
      </div>

      <div className="flex gap-[9px] w-[88px] h-[19px]">
        <Image
          src="/calendar_today_FILL0_wght300_GRAD0_opsz24.svg"
          width={24}
          height={17}
          alt="home"
        />
        <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left">
          Schedule
        </p>
      </div>

      <div className="flex gap-[9px] w-[88px] h-[19px]">
        <Image
          src="/group_FILL0_wght300_GRAD0_opsz24.svg"
          width={24}
          height={17}
          alt="home"
        />
        <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left">
          Message
        </p>
      </div>

      <div className="flex gap-[9px] w-[119px] h-[19px]">
        <Image
          src="/credit_card_FILL0_wght300_GRAD0_opsz24.svg"
          width={24}
          height={17}
          alt="home"
        />
        <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left">
          Transactions
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
