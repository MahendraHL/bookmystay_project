import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from 'react-bootstrap';

export default function FAQs() {
  return (
    <div>
        <Container fluid style={{textAlign:"left", backgroundColor:"whitesmoke"}}> <br />
        <Container fluid><br />
        <p style={{font:"32px sans blue",fontWeight:"bolder"}}>Frequently asked Questions</p>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><b>It is possible for me to get 101% money back on hotel booking cancellation?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, BookMyStay has introduced gos Stay Assured through which customers can cancel their booking anytime without loosing any cancellation charges and customers can get 101% money as refund.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography><b>How do know my reserveation is confirmed?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           After booking, Guest will receive a confirmation email. You can also login to your bookmystay.com account to view and manage your booking.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography><b>What paymet methods are accepted?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          BookMyStay usally accepts various payment methods, icluding credit/debit cards, Net Baking, EMI and digital wallets and UPI. Check the accepted payment methods during the booking proccess.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography><b>Are there any hidden charges & is my credit card is secured?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         BookMyStay is aiming to provide transparent pricing. Any additional fees or charges may br clearly communicated during the booking proccess. & BookMyStay employees secure encryption technology to protect your personal and finacial information. Your data is handaled with utmost confidentiality.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Container>
      </Container> <br />
    </div>
  );
}