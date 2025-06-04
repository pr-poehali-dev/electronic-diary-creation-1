import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const BonusSystem = () => {
  const currentPoints = 1250;
  const nextLevelPoints = 1500;
  const progress = (currentPoints / nextLevelPoints) * 100;

  const achievements = [
    { title: "Отличник месяца", points: 500, icon: "🏆", earned: true },
    { title: "Активный участник", points: 200, icon: "⭐", earned: true },
    { title: "Помощник класса", points: 150, icon: "🤝", earned: true },
    { title: "Спортсмен", points: 300, icon: "🏃", earned: false },
    { title: "Креативный подход", points: 250, icon: "🎨", earned: false },
  ];

  const recentActivities = [
    {
      activity: "Отличная оценка по математике",
      points: "+50",
      time: "2 часа назад",
    },
    { activity: "Участие в олимпиаде", points: "+100", time: "1 день назад" },
    { activity: "Помощь однокласснику", points: "+25", time: "2 дня назад" },
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Бонусные баллы</span>
            <span className="text-3xl font-bold">{currentPoints}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>До следующего уровня:</span>
              <span>{nextLevelPoints - currentPoints} баллов</span>
            </div>
            <Progress value={progress} className="bg-white/20" />
            <div className="flex justify-between text-sm opacity-90">
              <span>Уровень 5</span>
              <span>Уровень 6</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Достижения</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border-2 ${achievement.earned ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <p className="font-medium">{achievement.title}</p>
                      <p className="text-sm text-gray-600">
                        +{achievement.points} баллов
                      </p>
                    </div>
                  </div>
                  <Badge variant={achievement.earned ? "default" : "secondary"}>
                    {achievement.earned ? "Получено" : "Доступно"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Последние активности</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-blue-50 rounded-lg"
              >
                <div>
                  <p className="font-medium">{activity.activity}</p>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
                <Badge className="bg-green-500 text-white">
                  {activity.points}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BonusSystem;
