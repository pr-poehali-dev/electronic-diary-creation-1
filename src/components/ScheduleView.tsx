import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ScheduleView = () => {
  const todaySchedule = [
    {
      time: "8:00-8:45",
      subject: "Математика",
      room: "205",
      type: "пара",
    },
    {
      time: "8:55-9:40",
      subject: "Физика",
      room: "301",
      type: "пара",
    },
    {
      time: "9:50-10:35",
      subject: "Техническая механика",
      room: "107",
      type: "пара",
    },
    {
      time: "10:55-11:40",
      subject: "Материаловедение",
      room: "212",
      type: "пара",
    },
    {
      time: "11:50-12:35",
      subject: "Аэродинамика",
      room: "304",
      type: "пара",
    },
    {
      time: "12:45-13:30",
      subject: "Обед",
      room: "Столовая",
      type: "перерыв",
    },
    {
      time: "13:30-14:15",
      subject: "Английский язык",
      room: "301",
      type: "пара",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "пара":
        return "default";
      case "перерыв":
        return "secondary";
      default:
        return "outline";
    }
  };

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  const isCurrentLesson = (timeRange: string) => {
    const [start] = timeRange.split("-");
    const [startHour, startMinute] = start.split(":").map(Number);
    const lessonTime = startHour * 60 + startMinute;
    const nowTime = currentHour * 60 + currentMinute;
    return nowTime >= lessonTime && nowTime < lessonTime + 45;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Расписание на сегодня</span>
          <Badge variant="outline">
            {new Date().toLocaleDateString("ru-RU", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {todaySchedule.map((lesson, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${isCurrentLesson(lesson.time) ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Badge variant={getTypeColor(lesson.type)}>
                    {lesson.time}
                  </Badge>
                  {isCurrentLesson(lesson.time) && (
                    <Badge className="bg-green-500 text-white animate-pulse">
                      Сейчас
                    </Badge>
                  )}
                </div>
                {lesson.room !== "Столовая" && (
                  <Badge variant="outline">Каб. {lesson.room}</Badge>
                )}
              </div>
              <h4 className="font-semibold text-lg">{lesson.subject}</h4>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
          <h4 className="font-semibold mb-2">📚 Домашнее задание на завтра:</h4>
          <ul className="space-y-1 text-sm">
            <li>• Математика: № 245-250, стр. 89</li>
            <li>• Физика: Параграф 15, задачи 1-3</li>
            <li>• История: Читать главу 12</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScheduleView;
