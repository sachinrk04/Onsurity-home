import React, { Component } from 'react';

import './Expansion.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
  });

class Expansion extends Component {
    state = {
        expanded: null,
      };
    
      handleChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
      };
    render() {
        const { classes } = this.props;
        const { expanded } = this.state;
    return (
      <div className="container">
        <h2 className="Expansion-Header">Frequently Asked Questions</h2>
          <div className="row">
              <div className="Expansion-Box">
                <div className={classes.root}>
                    <ExpansionPanel  expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Do you offer full coverage?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem 
                        ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                         malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Why is my model not available?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem 
                        ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                         malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Why is my model not available?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem 
                        ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                         malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Why is my model not available?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem 
                        ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                         malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Why is my model not available?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem 
                        ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                         malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
              </div>
          </div>
      </div>
    );
    }
  }
  
  Expansion.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Expansion);