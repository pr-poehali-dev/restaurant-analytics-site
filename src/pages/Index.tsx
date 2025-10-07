import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const revenueData = [
  { name: 'Пн', value: 12500 },
  { name: 'Вт', value: 15200 },
  { name: 'Ср', value: 14800 },
  { name: 'Чт', value: 18900 },
  { name: 'Пт', value: 24500 },
  { name: 'Сб', value: 28300 },
  { name: 'Вс', value: 26700 },
];

const ordersData = [
  { name: 'Пн', orders: 45 },
  { name: 'Вт', orders: 52 },
  { name: 'Ср', orders: 49 },
  { name: 'Чт', orders: 63 },
  { name: 'Пт', orders: 78 },
  { name: 'Сб', orders: 89 },
  { name: 'Вс', orders: 85 },
];

const categoryData = [
  { name: 'Завтраки', value: 45200 },
  { name: 'Обеды', value: 78900 },
  { name: 'Ужины', value: 92300 },
  { name: 'Напитки', value: 34500 },
];

const forecastData = [
  { month: 'Янв', actual: 320000, forecast: 315000 },
  { month: 'Фев', actual: 340000, forecast: 338000 },
  { month: 'Мар', actual: 380000, forecast: 375000 },
  { month: 'Апр', actual: 420000, forecast: 425000 },
  { month: 'Май', actual: 0, forecast: 465000 },
  { month: 'Июн', actual: 0, forecast: 490000 },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Icon name="ChefHat" size={24} className="text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold">Restaurant Analytics</h1>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </Button>
          </div>
        </div>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="container mx-auto px-6 py-6">
        <TabsList className="mb-6">
          <TabsTrigger value="dashboard">
            <Icon name="LayoutDashboard" size={16} className="mr-2" />
            Дашборд
          </TabsTrigger>
          <TabsTrigger value="sales">
            <Icon name="TrendingUp" size={16} className="mr-2" />
            Продажи
          </TabsTrigger>
          <TabsTrigger value="reports">
            <Icon name="FileText" size={16} className="mr-2" />
            Отчеты
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Icon name="Settings" size={16} className="mr-2" />
            Настройки
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="hover-scale">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Выручка сегодня</CardTitle>
                <Icon name="DollarSign" size={20} className="text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₽26,700</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-success">+12.5%</span> к вчера
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Заказы</CardTitle>
                <Icon name="ShoppingCart" size={20} className="text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-success">+8.2%</span> к вчера
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Средний чек</CardTitle>
                <Icon name="Receipt" size={20} className="text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₽314</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-success">+3.8%</span> к вчера
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Гости</CardTitle>
                <Icon name="Users" size={20} className="text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">142</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-warning">-2.1%</span> к вчера
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Выручка за неделю</CardTitle>
                <CardDescription>Динамика продаж по дням</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorRevenue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Количество заказов</CardTitle>
                <CardDescription>Статистика заказов за неделю</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={ordersData}>
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar dataKey="orders" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Популярные категории</CardTitle>
              <CardDescription>Выручка по категориям меню за текущий месяц</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categoryData.map((item, index) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-sm font-semibold">
                        ₽{item.value.toLocaleString('ru-RU')}
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{
                          width: `${(item.value / Math.max(...categoryData.map((d) => d.value))) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sales" className="space-y-6">
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Детальная статистика продаж</CardTitle>
              <CardDescription>Сравнение фактических и прогнозируемых показателей</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={forecastData}>
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    name="Факт"
                  />
                  <Line
                    type="monotone"
                    dataKey="forecast"
                    stroke="hsl(var(--warning))"
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    name="Прогноз"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-base">Прогноз на май</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">₽465,000</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ожидаемая выручка по текущим трендам
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-base">Рост за квартал</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-success">+31.3%</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Увеличение выручки к предыдущему кварталу
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-base">Целевой показатель</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">₽500,000</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  До цели осталось <span className="font-semibold text-warning">7%</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>Финансовый отчет</CardTitle>
                <CardDescription>Подробная финансовая отчетность</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Общая выручка</span>
                  <span className="font-semibold">₽1,140,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Себестоимость</span>
                  <span className="font-semibold text-destructive">-₽456,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Операционные расходы</span>
                  <span className="font-semibold text-destructive">-₽285,000</span>
                </div>
                <div className="flex justify-between border-t pt-4">
                  <span className="font-semibold">Чистая прибыль</span>
                  <span className="text-lg font-bold text-success">₽399,000</span>
                </div>
                <Button className="w-full">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать отчет
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>Прогноз рентабельности</CardTitle>
                <CardDescription>Анализ и прогноз прибыли</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Маржинальность</span>
                    <span className="font-semibold text-success">35%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full bg-success transition-all" style={{ width: '35%' }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">ROI</span>
                    <span className="font-semibold text-primary">28%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full bg-primary transition-all" style={{ width: '28%' }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Прогноз роста</span>
                    <span className="font-semibold text-warning">42%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full bg-warning transition-all" style={{ width: '42%' }} />
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="TrendingUp" size={16} className="mr-2" />
                  Детальный анализ
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Настройки системы</CardTitle>
              <CardDescription>Управление параметрами аналитики</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Автоматические отчеты</p>
                  <p className="text-sm text-muted-foreground">
                    Получать ежедневные отчеты на email
                  </p>
                </div>
                <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Уведомления</p>
                  <p className="text-sm text-muted-foreground">Настроить push-уведомления</p>
                </div>
                <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Интеграции</p>
                  <p className="text-sm text-muted-foreground">
                    Подключить внешние сервисы
                  </p>
                </div>
                <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
