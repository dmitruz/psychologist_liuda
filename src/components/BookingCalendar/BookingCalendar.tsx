import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

type BookingResponse = {
    ok: boolean;
};

export default function BookingCalendar(): JSX.Element {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [time, setTime] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [booked, setBooked] = useState<boolean>(false);

    const timeSlots: string[] = [
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "14:00",
        "15:00",
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

            if (res.ok && data.ok) {
                setBooked(true);
            }
        } catch (err) {
            console.error("Booking error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-xl"
            >
                <Card className="rounded-2xl shadow-lg">
                    <CardContent className="p-6 space-y-6">
                        <h2 className="text-2xl font-semibold text-center">
                            Book a Consultation
                        </h2>

                        <div className="flex justify-center">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={(d: Date | undefined) => setDate(d)}
                                disabled={(d: Date) => d < new Date()}
                            />
                        </div>

                        {date && (
                            <div className="space-y-3">
                                <p className="text-sm text-gray-600 text-center">
                                    Available time slots for {format(date, "PPP")}
                                </p>

                                <div className="grid grid-cols-3 gap-2">
                                    {timeSlots.map((slot) => (
                                        <Button
                                            key={slot}
                                            variant={time === slot ? "default" : "outline"}
                                            onClick={() => setTime(slot)}
                                            className="rounded-xl"
                                        >
                                            {slot}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <Button
                            onClick={handleBooking}
                            className="w-full rounded-xl"
                            disabled={!date || !time || loading}
                        >
                            {loading ? "Booking..." : "Confirm Booking"}
                        </Button>

                        {booked && date && time && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center text-green-600 font-medium"
                            >
                                Appointment booked for {format(date, "PPP")} at {time}
                            </motion.div>
                        )}
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
