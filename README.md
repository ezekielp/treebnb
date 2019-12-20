
<p>
    <a href="https://mytreebnb.herokuapp.com/"><img src="https://raw.githubusercontent.com/ezekielp/treebnb-markdown-assets/master/markdown-assets/treebnb-splash-img.png"></a>
</p>

# Treebnb

Treebnb is a functional clone of the vacation rental site Airbnb, with a treehouse theme. You can sign up for an account, search and view treehouses to rent, and book (fake) vacations with a few clicks.

### Table of contents
1. [Demo](#demo)
2. [Technologies](#technologies)
3. [Features](#features)
    - [Bookings](#bookings)
    - [Search with Google Maps](#search)
4. [Future tasks](#future)

## <a name="demo"></a> Demo

Here is a live link to the site: https://mytreebnb.herokuapp.com/

## <a name="technologies"></a> Technologies

The site is built with a back end of Rails and PostgreSQL. The front end uses JavaScript, React, and Redux for state management across the app, as well as Webpack for bundling. Styling and transitions are done using vanilla CSS (and one SVG image). Heroku is used for deployment and static assets are served via AWS.

## <a name="features"></a> Features

I focused on the ability to make bookings and a search function for the clone.

### <a name="bookings"></a> Bookings

The bookings features presented a number of technical challenges on the front end. I used the [React Dates](https://github.com/airbnb/react-dates) library to render the calendar pickers, and integrating a single calendar was straightforward. But adding and syncing a second calendar on the same page proved more difficult.

<p>
    <a href="https://mytreebnb.herokuapp.com/"><img src="https://raw.githubusercontent.com/ezekielp/treebnb-markdown-assets/master/markdown-assets/treebnb-show-img-2.png"></a>
</p>

The main issue was that the second calendar had no text input attached and therefore needed to have its `focusedInput` prop set to `START_DATE` by default in order to be functional (see code snippet below). However, the other calendar picker, with inputs, cannot have its `focusedInput` prop set to `START_DATE` by default, since it would leave the "Check-in" picker open at all times. My solution was to create a separate state variable, `focusedInputLeftCol`, to which I set the left-side picker's `focusedInput` prop.

```
onFocusChange() {
    this.setState({
        focusedInputLeftCol: this.state.focusedInputLeftCol === START_DATE ? END_DATE : START_DATE
    });
}
```

I also needed to use the Moment.js library and conditional logic to block dates that are already booked or, once a guest has selected a start date, dates that come after a later booking.

### <a name="search"></a> Search with Google Maps

I implemented a simple search function for treehouses using a PostgreSQL `ILIKE` query on each treehouses's name, location and description. The bigger challenge came in integrating Google Maps. The Maps API can be complicated, and even something that seemed simple at first - such as removing markers from the map when performing a new search - proved challenging. When a user performs a search and the map component mounts, I iterate over any previous markers that are not locations in the new search and set their map to `null`.

<p>
    <a href="https://mytreebnb.herokuapp.com/"><img src="https://raw.githubusercontent.com/ezekielp/treebnb-markdown-assets/master/markdown-assets/treebnb-search-img-2.png"></a>
</p>

### <a name="future"></a> Future tasks

I will add the ability for users to leave reviews on each treehouse's page. I also plan to add amenities to the treehouses to give them more color, as well as a map box on each treehouse's page showing its location.