# AppCo server API

view what routes pass:

1. https://appco-statistic.herokuapp.com/ home-page(приветствие);

2. GET /users - все юзеры;
   Example: https://appco-statistic.herokuapp.com/users
           {
            "status": "success",
            "data": { [ .... {}] }
           }
            
3. GET /users?page=1&limit=50 - все юзеры с пагинацией, 
обязательно целые числа page - номер страницы и limit - сколько юзеров на странице;
  Example: https://appco-statistic.herokuapp.com/users?page=2&limit=2
  {
    "status": "success",
    "total": 500,
    "data": { [ .... {}] }
  }
  
  4. GET /users?page=1&limit=50&last_name=ascending или /users?page=1&limit=50&last_name=descending
  сортирвка по фамилии ascending - по возрастанию(A-Z), descending - по убыванию(Z-A)
  Example: https://appco-statistic.herokuapp.com/users?page=2&limit=2&last_name=ascending
           https://appco-statistic.herokuapp.com/users?page=2&limit=2&last_name=descending
           
  5. GET /users?page=1&limit=50&clicks=ascending или /users?page=1&limit=50&clicks=descending
  сортирвка по кликам ascending - по возрастанию(0-9), descending - по убыванию(9-0)
  Example: https://appco-statistic.herokuapp.com/users?page=1&limit=50&clicks=ascending
           https://appco-statistic.herokuapp.com/users?page=1&limit=50&clicks=descending
   
  6. GET /users?page=1&limit=50&page_views=ascending или /users?page=1&limit=50&page_views=descending
  сортирвка по просмотрам страницы ascending - по возрастанию(0-9), descending - по убыванию(9-0)
  Example: https://appco-statistic.herokuapp.com/users?page=1&limit=50&page_views=ascending
           https://appco-statistic.herokuapp.com/users?page=1&limit=50&page_views=descending
           
  7. GET /users/1 - id обязательно целое число от 1 до 1000
    Example: https://appco-statistic.herokuapp.com/users/1
    {
    "status": "success",
    "data": { [ .... {}] }
    }
   
   8. GET /users/1?period=2019-10-01,2019-10-20 - фильтрация за период статиска, валидация id целое число от 1 до 1000,
   дата формат "YYYY-MM-DD", две даты: первая начало периода, вторая конец периода - не должна быть раньше чем 1я дата
   Example: https://appco-statistic.herokuapp.com/users/1?period=2019-10-01,2019-10-20
   
   {
    "status": "success",
    "data": [
        {
            "user_id": 1,
            "date": "2019-10-01",
            "clicks": 0,
            "page_views": 0
        },
        {
            "user_id": 1,
            "date": "2019-10-02",
            "clicks": 0,
            "page_views": 0
        },
        {
            "user_id": 1,
            "date": "2019-10-03",
            "clicks": 0,
            "page_views": 0
        },
        {
            "user_id": 1,
            "date": "2019-10-04",
            "clicks": 0,
            "page_views": 0
        },
        {
            "user_id": 1,
            "date": "2019-10-05",
            "clicks": 0,
            "page_views": 0
        },
        {
            "user_id": 1,
            "date": "2019-10-06",
            "clicks": 0,
            "page_views": 0
        },
        {
            "user_id": 1,
            "date": "2019-10-07",
            "page_views": 846,
            "clicks": 477
        },
        {
            "user_id": 1,
            "date": "2019-10-08",
            "page_views": 582,
            "clicks": 877
        },
        {
            "user_id": 1,
            "date": "2019-10-09",
            "page_views": 195,
            "clicks": 473
        },
        {
            "user_id": 1,
            "date": "2019-10-10",
            "page_views": 814,
            "clicks": 651
        },
        {
            "user_id": 1,
            "date": "2019-10-11",
            "page_views": 939,
            "clicks": 530
        },
        {
            "user_id": 1,
            "date": "2019-10-12",
            "page_views": 716,
            "clicks": 214
        },
        {
            "user_id": 1,
            "date": "2019-10-13",
            "page_views": 878,
            "clicks": 752
        },
        {
            "user_id": 1,
            "date": "2019-10-14",
            "page_views": 946,
            "clicks": 933
        },
        {
            "user_id": 1,
            "date": "2019-10-15",
            "page_views": 967,
            "clicks": 947
        },
        {
            "user_id": 1,
            "date": "2019-10-16",
            "page_views": 616,
            "clicks": 597
        },
        {
            "user_id": 1,
            "date": "2019-10-17",
            "page_views": 218,
            "clicks": 291
        },
        {
            "user_id": 1,
            "date": "2019-10-18",
            "page_views": 697,
            "clicks": 563
        },
        {
            "user_id": 1,
            "date": "2019-10-19",
            "page_views": 912,
            "clicks": 294
        },
        {
            "user_id": 1,
            "date": "2019-10-20",
            "page_views": 395,
            "clicks": 848
        }
    ]
}
   
           
           
