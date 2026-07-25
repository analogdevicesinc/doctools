<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAXQ615 evaluation kit (EV kit) provides a proven platform  for  conveniently  evaluating  the  capabilities  of the  MAXQ615  low-power,  16-bit,  RISC  microcontroller targeted  for  battery-powered  applications.  The  EV  kit includes  a  MAXQ615  EV  kit  board,  example  software, USB-to-JTAG  interface  board,  10-pin  JTAG  interface cable,  and  a  standard  A-to-mini-B  USB  cable  for  connecting to a personal computer. The EV kit board, which provides  pin  headers  providing  access  to  the  processor's I/O port pins, a 5V power-supply input, pushbutton switches for user input, and an on-board SPI ADC and I 2 C  temperature  sensor  for  demonstration  purposes. The EV kit provides a complete, functional system ideal for  developing  and  debugging  applications  as  well  as evaluating the overall capabilities of the MAXQ615 RISC processor.

Figure 1. MAXQ615 Evaluation Kit Board

<!-- image -->

Ordering Information appears at end of data sheet.

## MAXQ615 Evaluation Kit Evaluates: MAXQ615

## Features

- S Easily Loads and Debugs Code Using Supplied JTAG Board
- S JTAG Interface Provides In-Application Debugging Features
-  Step-by-Step Execution Tracing
-  Breakpointing by Code Address, Data Memory Address, or Register Access
-  Data Memory or Register Content View and Edit
- S On-Board 3.3V Voltage Regulator
- S On-Board DS1775 I 2 C Temperature Sensor
- S On-Board MAX1118 SPI ADC
- S Two User-Input Pushbutton Switches with Paired Indicator LEDs (Connected to GPIO)
- S Prototyping Area
- S (Optional) +5V Regulated, Minimum 250mA Capacity, Center Post Positive Power Supply with 2.5mm Jack. Models that have been used in the past include CUI Inc. model DPR050030-P6P-SZ and V Infinity model EPS050100-P6P. If the EV kit is powered through the USB-to-JTAG adapter (through the 5V supply provided on the JTAG cable), then this power supply is not needed.

## EV Kit Contents

- S MAXQ615 EV Kit Board with Either Socketed MAXQ615 (XU1) or Soldered MAXQ615 (U4)
- S USB-to-JTAG Adapter Board
- S 2 x 5-Pin Connector Ribbon Cable (0.1in spacing) for JTAG Programming
- S Standard A-to-Mini-B USB interface Cable
- S MAXQ615 EV Kit CD (includes the MAXQ615 IC data sheet and user's guide; MAXQ615 EV kit quick start guide, data sheet, and schematics; application notes; utilities and configuration files; and example programs including source code). Go to www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit CD.

## MAXQ615 Evaluation Kit Evaluates: MAXQ615

Figure 2. MAXQ615 EV Kit System Block Diagram

<!-- image -->

Windows is a registered trademark of Microsoft Corp. IAR Embedded Workbench is a registered trademark of IAR Systems AB. MAXQ is a registered trademark of Maxim Integrated Products, Inc.

| DESIGNATION           |   QTY | DESCRIPTION                                                |
|-----------------------|-------|------------------------------------------------------------|
| C1, C7, C10- C12, C14 |     6 | 1 F F, 16V ceramic capacitors (0603)                       |
| C2                    |     1 | 2.2 F F, 6.3V ceramic capacitor (0603)                     |
| C3, C6, C8, C9, C13   |     5 | 100nF, 16V ceramic capacitors (0603)                       |
| C4                    |     1 | 10nF, 25V ceramic capacitor (0603)                         |
| C5                    |     1 | 4.7 F F, 10V ceramic capacitor (0603)                      |
| D1, D5, D6            |     3 | Surface-mount, 570nm green LEDs (0603) LG L29K-G2J1-24-Z   |
| D2                    |     1 | SMAJ5.0A (DO-214AC, SMA)                                   |
| D3, D4                |     2 | CGRM4001-G (SOD-123F)                                      |
| F1                    |     1 | Fuse 200mA resettable (0603) MF-FSMF020X-2                 |
| J1                    |     1 | 2.5mm power jack, through-hole mount, center post positive |
| J2                    |     1 | 2 x 5 header pins, 0.1in spacing                           |
| JU1-JU12              |    12 | 2 x 2 header pins, 0.1in spacing                           |
| MH1-MH4               |     4 | Mounting holes                                             |
| R1                    |     1 | 845 I Q 1%, 1/10W SMD resistor (0603)                      |
| R2, R9                |     2 | 10k I Q 1%, 1/10W SMD resistors (0603)                     |

## Detailed Description

This EV kit should be used with the following documents:

- MAXQ615	IC	data	sheet
- MAXQ615	user's	guide
- MAXQ615	EV	kit	data	sheet

These documents are included on the MAXQ615 EV kit CD, along with additional documentation and application notes.  For  the  latest  versions  of  the  documents  listed above, go to www.maximintegrated.com/MAXQ615 .

This  document  includes  full  schematics  for  the  EV  kit. Descriptions of the major sections and functions of the board follows.

## Power Supply

The MAXQ615 EV kit can be powered in several ways. The board can be powered from the USB-to-JTAG adapter. The adapter provides a +5V DC supply. From this, an

## MAXQ615 Evaluation Kit Evaluates: MAXQ615

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                           |
|---------------|-------|-------------------------------------------------------|
| R3, R4        |     2 | 1.8k I Q 1%, 1/10W SMD resistors (0603)               |
| R5, R7        |     2 | 110 I Q 1%, 1/10W SMD resistors (0603)                |
| R6, R8        |     2 | 402 I Q 1%, 1/10W SMD resistors (0603)                |
| SW1-SW3       |     2 | SPST normally open pushbutton switches, 6mm, B3S-1002 |
| TP1-TP21      |    21 | Test points                                           |
| U1            |     1 | 150mA linear regulator (5 SOT23) Maxim MAX8877EUK33+  |
| U2            |     1 | Serial 2-channel ADC (8 SOT23) Maxim MAX1118          |
| U3            |     1 | I 2 C temperature sensor (5 SOT23) Maxim DS1775       |
| U4            |     1 | Microcontroller (16 TQFN-EP) Maxim MAXQ615-F00+       |
| XU1           |     1 | Microcontroller socket Maxim MAXQ615-F00+             |
| -             |     0 | PCB: MAXQ615 EV KIT                                   |

on-board linear regulator (U1) regulates the +3.3V VDD power rail that is used by the MAXQ615.

If the MAXQ615 kit is 'free-running,' that is, if you are running an application that has been previously loaded into the MAXQ615, and you do not need to use the loader or debugger, the board may be powered by a 5V DC wall supply connected to plug J1. The supply must be center post positive, DC 5V regulated, with a 250mA minimum capacity.

By removing jumper JU1 and connecting a power supply in its place, it is also possible to power the MAXQ615 from  a  DC  bench  supply  or  other  regulated  power source. In this case, any power-supply voltage compatible with the device(s) that will be powered may be used; refer to the MAXQ615 IC data sheet for more details on the allowable range for the power supply.

## Reset Pushbutton

Pushbutton SW3 can be used to manually reset the MAXQ615.

## Serial ADC

The EV kit board includes a MAX1118 2-channel serial ADC (U2). By connecting the appropriate jumpers, the ADC can be connected to the MAXQ615, and is used to demonstrate the microcontroller's SPI communication interface.  Each  of  the  two  ADC  channels  can  be  connected to the cathode of an on-board LED, and can be used to measure the voltage drop across the LED. The CD  included  with  this  EV  kit  includes  sample  code  to demonstrate how to interact with the ADC.

## I 2 C Temperature Sensor

The  EV  kit  board  includes  a  DS1775  I 2 C  temperature sensor (U3). By connecting the appropriate jumpers, the temperature sensor can be connected to the MAXQ615, and  is  used  to  demonstrate  the  microcontroller's  I 2 C communication interface. The CD included with this EV kit includes sample code to demonstrate how to interact with the temperature sensor.

## Table 1. Jumper Functions

| JUMPER   | SETTING   | EFFECT OF SETTING                                                                                                                                                                                                                                                 |
|----------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Open      | No on-board supply is connected to the V DD rail. To operate the EV kit, an external bench supply must be connected to JU1.2 or one of the V DD test points. Refer to the MAXQ615 IC data sheet for acceptable operating range information for the V DD supply.   |
| JU1      | *Closed   | The +3.3V output from the on-board linear regulator (U1) is connected to the V DD rail. This supply will be used to power the MAXQ615 (as long as JU2 is closed), as well as the demo components U2 and U3 and the LEDs D5 and D6.                                |
| JU2      | Open      | No power is provided to the MAXQ615. This position should only be used when connecting a current meter between JU2.1 and JU2.2 to measure power consumption by the MAXQ615.                                                                                       |
| JU2      | *Closed   | The V DD pin on the MAXQ615 is connected to the on-board V DD power supply rail.                                                                                                                                                                                  |
| JU3      | Open      | The 5V pin on the JTAG cable is not connected to the on-board linear regulator supply input. If this position is used, then either a 5V external supply must be connected to J1 or a bench supply must be connected to JU1.2 or a V DD test point (with JU1 open) |
| JU3      | Closed    | The MAXQ615 EV kit may be powered directly through the USB-to-JTAG adapter's 5V supply (from the USB bus supply)                                                                                                                                                  |
| JU4      | Open      | No effect                                                                                                                                                                                                                                                         |
| JU4      | Closed    | The channel 1 input (CH1) on the ADC U2 is connected between LED D5 and R6 (see the EV kit schematic). This can be used to measure the diode drop across D5, for demonstration purposes.                                                                          |
| JU5      | Open      | No effect                                                                                                                                                                                                                                                         |
| JU5      | Closed    | The channel 0 input (CH0) on the ADC U2 is connected between LED D6 and R8 (refer to the kit schematic). This can be used to measure the diode drop across D6, for demonstration purposes.                                                                        |
| JU6      | Open      | No effect                                                                                                                                                                                                                                                         |
| JU6      | Closed    | The 'start conversion on falling edge' pin on the MAX1118 (U2) is connected to pin P0.3 on the MAXQ615. Refer to the MAX1118 IC data sheet for more information on initiating A/D conversions and reading conversion results.                                     |

## MAXQ615 Evaluation Kit Evaluates: MAXQ615

## GPIO Pushbuttons and Indicator LEDs

The two pushbuttons on the EV kit  board  can  be  connected  to  the  MAXQ615  GPIO  pins  P1.0  and  P1.1  by closing the associated jumper. See Table 1 for a description  of  the  jumpers.  If  the  pushbutton  is  pressed,  it  will pull the attached port pin low. The label indicating which port pin is tied to the switch is found on the board next to the switch. Switch SW2 pulls pin P1.0 (P10 label) low and switch SW1 pulls pin P1.1 low.

The indicator LEDs (D5 and D6) next to each switch can also be connected to the port pin by closing the associated jumper (as detailed in the jumper table). The LED will be illuminated if either the GPIO pin connected to it is driven low, or the pushbutton switch is pressed.

## Jumper Function List

Table 1 details the functions of the configurable jumpers on the EV kit board. Settings in the table marked with '*' indicate jumper placements that should be used for most normal operation (default settings).

## Table 1. Jumper Functions (continued)

| JUMPER   | SETTING   | EFFECT OF SETTING                                                                                                                                                                             |
|----------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU7      | Open      | No effect                                                                                                                                                                                     |
| JU7      | Closed    | The DOUT pin on the MAX1118 is connected to the SPI 0 interface MISO pin (P0.1) on the MAXQ615.                                                                                               |
| JU8      | Open      | No effect                                                                                                                                                                                     |
| JU8      | Closed    | The SCLK pin on the MAX1118 is connected to the SPI 0 interface pin SCLK (P0.2) on the MAXQ615.                                                                                               |
| JU9      | Open      | No effect                                                                                                                                                                                     |
| JU9      | Closed    | Connects the SDA pin on the I 2 C temperature sensor (DS1775, U3) to the I 2 C SDA pin (P1.3) on the MAXQ615. Also connects the I 2 C bus pullup resistor (R3) to the SDA pin on the MAXQ615. |
| JU10     | Open      | No effect                                                                                                                                                                                     |
| JU10     | Closed    | Connects the SCL pin on the I 2 C temperature sensor (DS1775, U3) to the I 2 C SCL pin (P1.2) on the MAXQ615. Also connects the I 2 C bus pullup resistor (R4) to the SCL pin on the MAXQ615. |
| JU11     | Open      | No effect                                                                                                                                                                                     |
| JU11     | Closed    | Allows the green LED D5 to be controlled using the port pin P1.1 (driving the port pin low lights the LED). Also, pressing SW1 will both drive P1.1 low and cause the LED to light.           |
| JU12     | Open      | No effect                                                                                                                                                                                     |
| JU12     | Closed    | Allows the green LED D6 to be controlled using the port pin P1.0 (driving the port pin low lights the LED). Also, pressing SW2 will both drive P1.0 low and cause the LED to light.           |

## MAXQ615 Evaluation Kit Evaluates: MAXQ615

## MAXQ615 Evaluation Kit Evaluates: MAXQ615

Figure 3. MAXQ615 EV Kit Schematics (Sheet 1 of 2)

<!-- image -->

## MAXQ615 Evaluation Kit Evaluates: MAXQ615

Figure 4. MAXQ615 EV Kit Schematics (Sheet 2 of 2)

<!-- image -->

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| MAXQ615-KIT# | EV Kit |

#Denotes a RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

## MAXQ615 Evaluation Kit Evaluates: MAXQ615

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/12            | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.