# Food Menu App

Explore a vast array of recipes from various cuisines worldwide with our Food Menu App. Whether you're craving local favorites or want to try something new, our app has you covered. Easily find recipes for different regional dishes and whip up delicious meals right at home. Discover, cook, and enjoy a world of flavors with ease!

## Deployment

Project is deployed in vercel.

```bash
  https://food-menu-app-seven.vercel.app/
```

## Tech Stack

- React
- Javascript
- Context API
- CSS modules

## Features

- **Sorting functionality** empowering users to alphabetically sort food items for easier navigation and browsing. With a simple click, users can arrange the items in ascending or descending order, enhancing the overall usability and convenience of the application.

- **Filter By Area** feature with dynamic population of areas using dropdown and HTML radio boxes. Users can select an area and click 'Apply' for real-time updates based on the selected region. Refer to the API documentation for relevant endpoints.

- **Pagination functionality** to display a limited number of items at a time, enhancing user experience by managing content in manageable chunks. Users can navigate through pages to access additional items, ensuring efficient browsing.

- **Responsive design** to ensure optimal viewing and interaction across all screen sizes, enhancing accessibility and usability. The application dynamically adjusts its layout and content to provide a seamless experience on various devices, from desktops to smartphones.

## API Reference

#### api

```http
  www.themealdb.com/api/json/v1/1
```

| Description                                                                                                            |
| :--------------------------------------------------------------------------------------------------------------------- |
| The base URL represents the root endpoint of the API server, acting as the foundation for all subsequent API requests. |

#### Get list of all areas

```http
  GET api/list.php?a=list
```

| Description               |
| :------------------------ |
| Fetches list of all areas |

#### Filter by area

```http
  GET api/filter.php?a=${area}
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `area`    | `string` | Filter dishes based on their region |

## Authors

- [@jailorx](https://www.github.com/jailorx)
