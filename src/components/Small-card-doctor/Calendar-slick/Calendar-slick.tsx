import Box from "@mui/material/Box";
import React, { useState } from "react";
import Slider from "react-slick";
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import "./slick.css";
import "./slick-theme.css";
import Button from "@mui/material/Button";
import { GetDateNextWeek } from "~/helper-function";
import Typography from "@mui/material/Typography";
import { getIntervals } from "~/helper-function/get-hourses-work-doctor";
import {
  BUTTON_SHOW_LESS,
  BUTTON_SHOW_MORE,
} from "~/components/Small-card-doctor";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0}
    type="button"
  >
    <ChevronLeft size="24px" className="chevron-icon" />
  </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1}
    type="button"
  >
    <ChevronRight size="24px" className="chevron-icon" />
  </button>
);
const settings = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
};

interface IPropsCalendarSlick {
  workTime: string[];
  setValueDateAndTime: any;
  availableTime: string[];
}
export const CalendarSlick = ({
  workTime,
  setValueDateAndTime,
  availableTime,
}: IPropsCalendarSlick) => {
  const [selectedDateAndTime, setSelectedDateAndTime] = useState<string | null>(
    null
  );
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <Box
      maxWidth="220px"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      m="0 auto"
    >
      <Slider {...settings}>
        {GetDateNextWeek().map((date: any, index: number) => {
          const { dayOfWeek, dayOfMonth, month, formattedDate } = date;
          return (
            <Box key={`date-${formattedDate}`}>
              <Box
                display="flex"
                flexDirection="column"
                gap="2px"
                justifyContent="center"
                alignItems="center"
                pb="16px"
              >
                <Typography variant="caption" component="p">
                  {dayOfWeek}
                </Typography>
                <Typography
                  variant="caption"
                  component="p"
                >{`${dayOfMonth} ${month}`}</Typography>
              </Box>
              <Box maxHeight={showMore ? "" : "148px"} overflow="hidden">
                {getIntervals(workTime[0], workTime[1]).map(
                  (time: any, index: number) => {
                    const date = `${formattedDate} ${time}`;
                    return (
                      <Button
                        key={`time-record-${time}`}
                        variant={
                          date === selectedDateAndTime ? "contained" : "text"
                        }
                        color={
                          date === selectedDateAndTime ? "primary" : "inherit"
                        }
                        onClick={() => {
                          setSelectedDateAndTime(date);
                          setValueDateAndTime({ time, date: formattedDate });
                        }}
                        disabled={
                          !!availableTime.find(
                            (timeDisable: string) => timeDisable === time
                          )
                        }
                        sx={{ p: "11px 14px" }}
                      >
                        {time}
                      </Button>
                    );
                  }
                )}
              </Box>
            </Box>
          );
        })}
      </Slider>

      <Box display="flex" justifyContent="center">
        <Button
          variant="text"
          endIcon={!showMore ? <ChevronDown /> : <ChevronUp />}
          onClick={toggleShowMore}
        >
          {!showMore ? BUTTON_SHOW_MORE : BUTTON_SHOW_LESS}
        </Button>
      </Box>
    </Box>
  );
};
