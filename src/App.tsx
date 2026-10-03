
import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function App() {
  const [studentName, setStudentName] = useState("");
  const [attendance, setAttendance] = useState(0);

  const nameInputRef = useRef<HTMLInputElement>(null);

  // Update browser title
  useEffect(() => {
    document.title = `Attendance: ${attendance}`;
  }, [attendance]);

  // Present
  const handlePresent = () => {
    setAttendance((prev) => prev + 1);
  };

  // Remove
  const handleRemove = () => {
    setAttendance((prev) => Math.max(0, prev - 1));
  };

  // Reset
  const handleReset = () => {
    setAttendance(0);
  };

  // Focus Student Name
  const handleFocus = () => {
    nameInputRef.current?.focus();
  };

  // Attendance Message
  const getAttendanceMessage = () => {
    if (attendance === 0) {
      return "No attendance recorded";
    }

    if (attendance >= 1 && attendance <= 4) {
      return "Attendance in progress";
    }

    return "Good Attendance ⭐";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center p-3">

      {/* Main Card */}
      <Card className="w-full max-w-sm overflow-hidden border border-white/10 bg-white p-0 shadow-2xl">

        {/* Blue Header */}
        <CardHeader className="m-0 rounded-none bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-5 text-white">

          <div className="text-center">

            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-2xl shadow-lg">
              🎓
            </div>

            <CardTitle className="text-xl font-bold text-white">
              Student Attendance
            </CardTitle>

            <p className="mt-1 text-xs text-blue-100">
              Keep track of your attendance easily
            </p>

          </div>

        </CardHeader>

        {/* Content */}
        <CardContent className="space-y-4 p-5">

          {/* Student Name */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-slate-700">
              Student Name
            </label>

            <Input
              ref={nameInputRef}
              type="text"
              placeholder="Enter student name..."
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="h-10 border-slate-200 bg-slate-50 px-3 text-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Focus Button */}
          <Button
            onClick={handleFocus}
            variant="outline"
            className="h-9 w-full border-blue-200 text-sm text-blue-600 hover:bg-blue-50 hover:text-blue-700"
          >
            🎯 Focus Student Name
          </Button>

          {/* Student Name Display */}
          {studentName && (
            <div className="rounded-lg border border-blue-100 bg-blue-50 p-2.5 text-center">
              <p className="text-[10px] font-medium uppercase tracking-wider text-blue-500">
                Student
              </p>

              <p className="text-base font-bold text-blue-900">
                {studentName}
              </p>
            </div>
          )}

          {/* Attendance Counter */}
          <div className="rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 p-4 text-center shadow-inner">

            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Attendance Count
            </p>

            <div className="mx-auto mt-3 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg ring-4 ring-blue-100">
              <span className="text-3xl font-black text-white">
                {attendance}
              </span>
            </div>

            {/* Status */}
            <div className="mt-3">
              <p
                className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                  attendance === 0
                    ? "bg-slate-200 text-slate-600"
                    : attendance < 5
                    ? "bg-amber-100 text-amber-700"
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                {getAttendanceMessage()}
              </p>
            </div>

          </div>

          {/* Attendance Buttons */}
          <div className="grid grid-cols-2 gap-2.5">

            <Button
              onClick={handlePresent}
              className="h-10 bg-emerald-500 text-sm font-bold shadow-md hover:bg-emerald-600"
            >
              ✓ Present +
            </Button>

            <Button
              onClick={handleRemove}
              variant="destructive"
              disabled={attendance === 0}
              className="h-10 text-sm font-bold shadow-md"
            >
              − Remove
            </Button>

          </div>

          {/* Reset */}
          <Button
            onClick={handleReset}
            variant="outline"
            className="h-9 w-full border-slate-300 text-sm font-semibold text-slate-600 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
          >
            ↻ Reset Attendance
          </Button>

        </CardContent>
      </Card>
    </div>
  );
}

export default App;
