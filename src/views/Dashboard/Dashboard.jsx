import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

/*
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";
*/

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>developer_board</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Number of robots</p>
                <h3 className={classes.cardTitle}>
                  5
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <a href="#robots" onClick={e => e.preventDefault()}>
                    View all robots
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Icon>format_list_bulleted</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Number of queues</p>
                <h3 className={classes.cardTitle}>7</h3>
              </CardHeader>
              <CardFooter stats>
              <div className={classes.stats}>
                  <a href="#queues" onClick={e => e.preventDefault()}>
                    View all queues
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon>check</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Number of transactions</p>
                <h3 className={classes.cardTitle}>245</h3>
              </CardHeader>
              <CardFooter stats>
              <div className={classes.stats}>
                  <a href="#transactions" onClick={e => e.preventDefault()}>
                    View all transactions
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Number of cases to manual handling</p>
                <h3 className={classes.cardTitle}>14</h3>
              </CardHeader>
              <CardFooter stats>
              <div className={classes.stats}>
                  <a href="#transactions&error" onClick={e => e.preventDefault()}>
                    View all cases to manual
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <h3>Header</h3>
        <br />
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
