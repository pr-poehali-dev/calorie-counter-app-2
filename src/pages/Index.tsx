import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [dailyCalories] = useState(1450);
  const [calorieGoal] = useState(2000);
  const [meals] = useState([
    { name: 'Завтрак', calories: 450, time: '08:30', icon: 'Coffee' },
    { name: 'Обед', calories: 650, time: '13:15', icon: 'UtensilsCrossed' },
    { name: 'Ужин', calories: 350, time: '19:00', icon: 'Moon' }
  ]);

  const progress = (dailyCalories / calorieGoal) * 100;
  const remaining = calorieGoal - dailyCalories;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pb-20">
      <div className="max-w-md mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
              CalorieScan AI
            </h1>
            <p className="text-muted-foreground text-sm">Твой умный помощник в питании</p>
          </div>

          <TabsContent value="home" className="space-y-6 mt-0">
            <Card className="p-6 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border-2">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Сегодня употреблено</p>
                  <h2 className="text-4xl font-bold text-primary">{dailyCalories}</h2>
                  <p className="text-sm text-muted-foreground">из {calorieGoal} ккал</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">Осталось</p>
                  <p className="text-2xl font-bold text-accent">{remaining}</p>
                  <p className="text-xs text-muted-foreground">ккал</p>
                </div>
              </div>
              <Progress value={progress} className="h-3 mb-2" />
              <p className="text-xs text-center text-muted-foreground">
                {progress.toFixed(0)}% от дневной нормы
              </p>
            </Card>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Приёмы пищи</h3>
                <Button size="sm" variant="ghost" className="text-primary">
                  <Icon name="Plus" size={16} className="mr-1" />
                  Добавить
                </Button>
              </div>
              <div className="space-y-3">
                {meals.map((meal, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-all hover:scale-[1.02]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <Icon name={meal.icon} size={24} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">{meal.name}</p>
                          <p className="text-sm text-muted-foreground">{meal.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-secondary">{meal.calories}</p>
                        <p className="text-xs text-muted-foreground">ккал</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon name="TrendingUp" size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Отличный прогресс!</p>
                  <p className="text-sm text-muted-foreground">Ты на правильном пути</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="scanner" className="space-y-6 mt-0">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="text-center space-y-6">
                <div className="relative mx-auto w-48 h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl opacity-20 animate-pulse-slow"></div>
                  <div className="absolute inset-4 bg-background rounded-2xl flex items-center justify-center">
                    <Icon name="Camera" size={80} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Сканировать блюдо</h2>
                  <p className="text-muted-foreground">
                    Сфотографируй еду, и AI посчитает калории автоматически
                  </p>
                </div>
                <Button size="lg" className="w-full text-lg h-14 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Camera" size={24} className="mr-2" />
                  Открыть камеру
                </Button>
                <Button variant="outline" size="lg" className="w-full text-lg h-14">
                  <Icon name="Image" size={24} className="mr-2" />
                  Загрузить фото
                </Button>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
              <div className="flex items-start gap-3">
                <Icon name="Sparkles" size={20} className="text-accent mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-accent mb-1">AI распознавание</p>
                  <p className="text-muted-foreground text-xs">
                    Нейросеть определит блюдо и рассчитает калории с точностью 95%
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6 mt-0">
            <div className="grid grid-cols-3 gap-3">
              <Card className="p-4 text-center bg-gradient-to-br from-primary/10 to-primary/5">
                <Icon name="Flame" size={24} className="mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">{dailyCalories}</p>
                <p className="text-xs text-muted-foreground">Сегодня</p>
              </Card>
              <Card className="p-4 text-center bg-gradient-to-br from-secondary/10 to-secondary/5">
                <Icon name="TrendingUp" size={24} className="mx-auto mb-2 text-secondary" />
                <p className="text-2xl font-bold">1620</p>
                <p className="text-xs text-muted-foreground">Средняя</p>
              </Card>
              <Card className="p-4 text-center bg-gradient-to-br from-accent/10 to-accent/5">
                <Icon name="Target" size={24} className="mx-auto mb-2 text-accent" />
                <p className="text-2xl font-bold">{calorieGoal}</p>
                <p className="text-xs text-muted-foreground">Цель</p>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Неделя (ккал)</h3>
              <div className="space-y-3">
                {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, index) => {
                  const value = [1820, 1650, 1580, 1750, 1450, 2100, 1900][index];
                  const percent = (value / 2200) * 100;
                  return (
                    <div key={day}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{day}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Макронутриенты</h3>
              <div className="space-y-4">
                {[
                  { name: 'Белки', value: 85, goal: 100, color: 'primary', icon: 'Beef' },
                  { name: 'Жиры', value: 45, goal: 65, color: 'secondary', icon: 'Droplet' },
                  { name: 'Углеводы', value: 180, goal: 250, color: 'accent', icon: 'Wheat' }
                ].map((macro) => (
                  <div key={macro.name}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <Icon name={macro.icon} size={16} className={`text-${macro.color}`} />
                        <span className="text-sm font-medium">{macro.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {macro.value}г / {macro.goal}г
                      </span>
                    </div>
                    <Progress
                      value={(macro.value / macro.goal) * 100}
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6 mt-0">
            <Card className="p-6 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Target" size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Моя цель</h2>
                  <p className="text-sm text-muted-foreground">Поддержание формы</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Дневная норма</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="calories" className="text-sm">Калории (ккал)</Label>
                  <Input
                    id="calories"
                    type="number"
                    defaultValue={2000}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="protein" className="text-sm">Белки (г)</Label>
                  <Input
                    id="protein"
                    type="number"
                    defaultValue={100}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="fats" className="text-sm">Жиры (г)</Label>
                  <Input
                    id="fats"
                    type="number"
                    defaultValue={65}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="carbs" className="text-sm">Углеводы (г)</Label>
                  <Input
                    id="carbs"
                    type="number"
                    defaultValue={250}
                    className="mt-1.5"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                  Сохранить изменения
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Цели тренировок</h3>
              <div className="space-y-3">
                {[
                  { name: 'Похудение', active: false },
                  { name: 'Поддержание', active: true },
                  { name: 'Набор массы', active: false }
                ].map((goal) => (
                  <button
                    key={goal.name}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      goal.active
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{goal.name}</span>
                      {goal.active && (
                        <Icon name="CheckCircle2" size={20} className="text-primary" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6 mt-0">
            <Card className="p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent mx-auto mb-4 flex items-center justify-center">
                <Icon name="User" size={48} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-1">Мой профиль</h2>
              <p className="text-muted-foreground">user@example.com</p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Физические данные</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="weight" className="text-sm">Вес (кг)</Label>
                  <Input
                    id="weight"
                    type="number"
                    defaultValue={75}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="height" className="text-sm">Рост (см)</Label>
                  <Input
                    id="height"
                    type="number"
                    defaultValue={175}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="age" className="text-sm">Возраст</Label>
                  <Input
                    id="age"
                    type="number"
                    defaultValue={28}
                    className="mt-1.5"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                  Обновить данные
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Настройки</h3>
              <div className="space-y-3">
                {[
                  { icon: 'Bell', label: 'Уведомления', enabled: true },
                  { icon: 'Moon', label: 'Темная тема', enabled: false },
                  { icon: 'Globe', label: 'Язык: Русский', enabled: true }
                ].map((setting, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon name={setting.icon} size={20} className="text-muted-foreground" />
                      <span className="text-sm">{setting.label}</span>
                    </div>
                    <div className={`w-10 h-6 rounded-full transition-colors ${
                      setting.enabled ? 'bg-primary' : 'bg-muted'
                    }`}>
                      <div className={`w-5 h-5 rounded-full bg-white mt-0.5 transition-transform ${
                        setting.enabled ? 'ml-4' : 'ml-0.5'
                      }`} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsList className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md grid grid-cols-5 h-16 bg-card/95 backdrop-blur-sm border-2 shadow-lg">
            <TabsTrigger value="home" className="flex-col gap-1 data-[state=active]:bg-primary/10">
              <Icon name="Home" size={20} />
              <span className="text-xs">Главная</span>
            </TabsTrigger>
            <TabsTrigger value="scanner" className="flex-col gap-1 data-[state=active]:bg-primary/10">
              <Icon name="ScanLine" size={20} />
              <span className="text-xs">Сканер</span>
            </TabsTrigger>
            <TabsTrigger value="stats" className="flex-col gap-1 data-[state=active]:bg-primary/10">
              <Icon name="BarChart3" size={20} />
              <span className="text-xs">Статистика</span>
            </TabsTrigger>
            <TabsTrigger value="goals" className="flex-col gap-1 data-[state=active]:bg-primary/10">
              <Icon name="Target" size={20} />
              <span className="text-xs">Цели</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex-col gap-1 data-[state=active]:bg-primary/10">
              <Icon name="User" size={20} />
              <span className="text-xs">Профиль</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;