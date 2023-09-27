// 加载 Google Charts 库
google.charts.load('current', {'packages':['gantt']});

// 设置加载完毕后的回调函数
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // 创建数据表格
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Task ID');
  data.addColumn('string', 'Task Name');
  data.addColumn('date', 'Start Date');
  data.addColumn('date', 'End Date');
  data.addColumn('number', 'Duration');
  data.addColumn('number', 'Percent Complete');
  data.addColumn('string', 'Dependencies');

  // 添加任务数据
  data.addRows([
    ['Task1', 'Collect Data', new Date(2023, 8, 1), new Date(2023, 8, 5), null, 50, null],
    ['Task2', 'Design System', new Date(2023, 8, 6), new Date(2023, 8, 10), null, 30, 'Task1'],
    ['Task3', 'Prototype', new Date(2023, 9, 6), new Date(2023, 9, 10), null, 30, 'Task2'],
    ['Task4', 'Feedback', new Date(2023, 10, 6), new Date(2023, 10, 10), null, 30, 'Task3']
    // 添加更多任务
  ]);

  // 创建 Gantt 图表
  var chart = new google.visualization.Gantt(document.getElementById('gantt_chart'));

  // 配置 Gantt 图表选项
  var options = {
    height: 400
  };

  // 渲染 Gantt 图表
  chart.draw(data, options);
}
