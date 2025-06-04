import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AcademicStats = () => {
  const subjects = [
    { name: "Математика", grade: 5, trend: "up" },
    { name: "Русский язык", grade: 4, trend: "stable" },
    { name: "Физика", grade: 5, trend: "up" },
    { name: "Химия", grade: 4, trend: "down" },
    { name: "История", grade: 5, trend: "up" },
    { name: "Литература", grade: 4, trend: "stable" },
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return "📈";
      case "down":
        return "📉";
      default:
        return "➡️";
    }
  };

  const getGradeColor = (grade: number) => {
    if (grade === 5) return "bg-green-500";
    if (grade === 4) return "bg-blue-500";
    if (grade === 3) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Академическая успеваемость</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full ${getGradeColor(subject.grade)} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {subject.grade}
                </div>
                <span className="font-medium">{subject.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">{getTrendIcon(subject.trend)}</span>
                <Badge variant={subject.grade >= 4 ? "default" : "destructive"}>
                  {subject.grade >= 4 ? "Хорошо" : "Требует внимания"}
                </Badge>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-green-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Средний балл:</span>
            <span className="text-2xl font-bold text-green-600">4.5</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AcademicStats;
