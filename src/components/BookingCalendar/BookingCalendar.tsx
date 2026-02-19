import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

type BookingResponse = {
    ok: boolean;
};

export default function BookingCalendar(): JSX.Element {
    const [date, setDate] = useState<Date | undefined>();
    const [time, setTime] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [booked, setBooked] = useState(false);

    const timeSlots: string[] = [
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "14:00",
        "15:00",
        "16:00",
        "16:00",
        "17:00",
    ];

    const handleBooking = async (): Promise<void> => {
        if (!date || !time) return;

        setLoading(true);

        try {
            const res = await fetch("/api/book", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    date: format(date, "yyyy-MM-dd"),
                    time,
                    name: "Client name",
                    email: "client@email.com",
                }),
            });

            const data: BookingResponse = await res.json();
            if (data.ok) setBooked(true);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-center">
                Book Consultation
            </h2>

            <div className="flex justify-center border rounded-lg p-4">
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={{ before: new Date() }}
                />
            </div>

            {date && (
                <div className="space-y-3">
                    <p className="text-center text-gray-600">
                        Available times for {format(date, "PPP")}
                    </p>

                    <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((slot) => (
                            <button
                                key={slot}
                                onClick={() => setTime(slot)}
                                className={`border rounded-lg p-2 transition
                  ${time === slot ? "bg-black text-white" : "hover:bg-gray-100"}
                `}
                            >
                                {slot}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <button
                onClick={handleBooking}
                disabled={!date || !time || loading}
                className="w-full bg-black text-white rounded-lg p-3 disabled:opacity-50"
            >
                {loading ? "Booking..." : "Confirm booking"}
            </button>

            {booked && date && time && (
                <div className="text-center text-green-600 font-medium">
                    Booked for {format(date, "PPP")} at {time}
                </div>
            )}
        </div>
    );
}