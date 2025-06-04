import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FreeLunchSystem = () => {
  const lunchStatus = {
    isEligible: true,
    remainingMeals: 15,
    totalMeals: 20,
    currentBalance: 850,
  };

  const weekMenu = [
    { day: "Понедельник", meal: "Борщ, котлета с пюре, компот", calories: 650 },
    { day: "Вторник", meal: "Суп лапша, плов с курицей, чай", calories: 580 },
    { day: "Среда", meal: "Солянка, рыба с рисом, морс", calories: 620 },
    { day: "Четверг", meal: "Щи, гуляш с гречкой, кисель", calories: 670 },
    { day: "Пятница", meal: "Крем-суп, макароны с сыром, сок", calories: 550 },
  ];

  const nutritionStats = [
    { label: "Белки", value: 25, unit: "г", color: "bg-red-500" },
    { label: "Жиры", value: 15, unit: "г", color: "bg-yellow-500" },
    { label: "Углеводы", value: 80, unit: "г", color: "bg-blue-500" },
    { label: "Калории", value: 620, unit: "ккал", color: "bg-green-500" },
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Бесплатное питание</span>
            <span className="text-2xl">🍽️</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold">{lunchStatus.remainingMeals}</p>
              <p className="text-sm opacity-90">Осталось обедов</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">
                {lunchStatus.currentBalance}₽
              </p>
              <p className="text-sm opacity-90">Баланс карты</p>
            </div>
          </div>
          <div className="mt-4">
            <Badge className="bg-white text-green-600 font-semibold">
              ✅ Льгота подтверждена
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Меню на неделю</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {weekMenu.map((menu, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-blue-600">{menu.day}</h4>
                  <Badge variant="outline">{menu.calories} ккал</Badge>
                </div>
                <p className="text-gray-700">{menu.meal}</p>
                {index === 0 && (
                  <Button size="sm" className="mt-2">
                    Заказать на сегодня
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Пищевая ценность (среднее)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nutritionStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-3 bg-gray-50 rounded-lg"
              >
                <div
                  className={`w-4 h-4 ${stat.color} rounded-full mx-auto mb-2`}
                ></div>
                <p className="font-bold text-lg">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.unit}</p>
                <p className="text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeLunchSystem;
