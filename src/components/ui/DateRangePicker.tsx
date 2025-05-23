// components/DateRangePicker.tsx
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

export function DateRangePicker({
  date,
  setDate,
}: {
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className="justify-start text-left font-normal"
        >
          <CalendarIcon size={14} />
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, "dd-MM-yyyy")} -{" "}
                {format(date.to, "dd-MM-yyyy")}
              </>
            ) : (
              format(date.from, "dd-MM-yyyy")
            )
          ) : (
            <span className="text-[13px] font-medium max-sm:hidden">
              02 Sep - 25 Oct 2025
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          initialFocus
          mode="range"
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
}
