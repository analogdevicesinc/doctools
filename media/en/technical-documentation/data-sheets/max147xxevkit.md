<!-- lastmod 2022-08-04 -->
## MAX147xx Evaluation Kit

Evaluates: MAX14759, MAX14760, MAX14761, MAX14762, MAX14763, MAX14764

## General Description

The MAX147xx evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  for  evaluating  the  MAX14759 and  MAX14760  family  of  beyond-the-rail  switches.  The EV kit features footprints for both 8-pin and 10-pin TDFN surface-mount  packages  to  evaluate  any  part  in  the switch family. These switches operate from a single +3V to +5.5V supply.

The EV kit comes with a MAX14759 single channel switch installed on U1. This EV kit can also be used to evaluate the MAX14760-MAX14764.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                         |
|----------------|-------|---------------------------------------------------------------------|
| C1, C4         |     2 | 1µF, 16V ±10% X7R ceramic capacitors (0603) Murata GRM188R71C105K   |
| C2, C3, C5, C6 |     4 | 0.1µF, 50V ±10% X7R ceramic capacitors (0603) Murata GRM188R71H104K |
| JU1-JU3        |     3 | 3-pin headers                                                       |
| P1, P3         |     2 | Red test points                                                     |
| P2, P4         |     2 | Black test points                                                   |

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note:

Indicate that you are using the MAX147xx when contacting this component supplier.

## Benefits and Features

- +3V to +5.5V Input Supply Range
- Evaluates Single- and Dual-Channel Switches
- ±25V Voltage Signal Input Range
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                                                       |
|---------------|-------|-----------------------------------------------------------------------------------|
| U1            |     1 | Single-channel above- and below-the- rails switch (8 TDFN-EP*) Maxim MAX14759ETA+ |
| U2            |     1 | Dual-channel above- and below-the- rails switch (10 TDFN-EP*) Maxim MAX14761ETA+  |
| -             |     1 | PCB: MAX147xx EVALUATION KIT                                                      |

* EP = Exposed pad.

<!-- image -->

## Table 1. Single-Channel Switch Jumper Description Enable (JU1)

| JUMPER   | SHUNT    | DESCRIPTION        | DESCRIPTION       |
|----------|----------|--------------------|-------------------|
| JUMPER   | POSITION | MAX14759/MAX14760  | MAX14763/MAX14764 |
| JU1      | 1-2*     | Switch is enabled  | A2 connects to B  |
| JU1      | 2-3      | Switch is disabled | A1 connects to B  |

*Default position.

## Table 2. Dual-Channel Switch Jumper Description Enable (JU2, JU3)

| JUMPER   | SHUNT POSITION   | DESCRIPTION           |
|----------|------------------|-----------------------|
| JU2      | 1-2              | Switch A1 is disabled |
| JU2      | 2-3*             | Switch A1 is enabled  |
| JU3      | 1-2              | Switch A2 is enabled  |
| JU3      | 2-3*             | Switch A2 is disabled |

*Default position.

## Quick Start

## Required Equipment

- MAX147xx EV kit with U1 or U2 installed
- +5V, 50mA power supply
- +25V, 800mA power supply
- Two voltmeters

## Procedure

The EV kit  is  fully  assembled  and  tested.  Follow  these steps to verify board operation.

- 1)  Verify  that  jumpers  JU1,  JU2,  and  JU3  are  in  their default position as shown in Table 1 and Table 2.
- 2)  To  evaluate  a  single-channel  switch  (U1),  connect the  +5V  supply  positive  and  ground  terminals  to  the VCC1 and GND test points, respectively. To evaluate a  dual-channel  switch  (U2),  connect  the  +5V  supply positive and ground terminals to the VCC2 and GND test points, respectively.
- 3)  To evaluate a single-channel switch (U1), connect the +25V supply positive and ground terminals to the A2/A and GND test points, respectively. To evaluate a dualchannel switch (U2), connect the +25V supply positive and ground terminals to the A1 and GND test points, respectively.
- 4)  Connect a voltmeter at the B (or B1, if using U2) and GND test points.
- 5)  Enable the +5V supply.
- 6)  Enable the +25V supply.
- 7)  Verify that the voltmeter displays +25V.

## Detailed Description of Hardware

The MAX147XX EV kit is a fully assembled and tested circuit board demonstrating the single-channel MAX14759/ MAX14760/MAX14763/MAX14764 and MAX14761/ MAX14762  dual-channel  ±25V  above-  and  below-therails switches. The EV kit operates from a single +3V to +5.5V input voltage supply. These switches integrate bias circuitry  to  provide  a  ±25V  analog  voltage  range  with  a single  +3V  to  +5.5V  supply.  This  extended  input  range allows  switching  different  communications  signals  such as RS-232, RS-485, audio, and USB 1.1 with a single 3V to 5V supply.

## User-Supplied Power Supply

The EV kit is powered from a single +3V to +5.5V power supply connected at the VCC\_ and GND test points. The EV kit circuit inputs (A\_ and B\_) can transmit signals of up to ±25V.

## MAX14759 and MAX14760 Configuration

Jumper JU1 enables/disables the switch across the sin -gle-channel  SPST  MAX14759/MAX14760.  See  Table  1 for jumper settings to configure the switch.

## MAX14761 and MAX14762 Configuration

Jumpers  JU2  and  JU3  enable/disable  the  switches across  the  dual-channel  SPST  MAX14761/MAX14762. See Table 2 for jumper settings to configure the switches.

## MAX14763 and MAX14764 Configuration

Jumper JU1 configures the single-channel SPDT switch across the MAX14763/MAX14764. See Table 1 for jumper settings to configure the switch.

Figure 1. MAX147xx EV Kit Schematic

<!-- image -->

## MAX147xx Evaluation Kit Evaluates: MAX14759, MAX14760, MAX14761, MAX14762, MAX14763, MAX14764

<!-- image -->

Figure 2. MAX147xx EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX147xx EV Kit PCB Layout-Component Side

Figure 4. MAX147xx EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 5. MAX147xx EV Kit Component Placement GuideSolder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX147XXEVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX147xx Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/12           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX14759, MAX14760, MAX14761,

MAX14762, MAX14763, MAX14764

MAX147xx Evaluation Kit Evaluates: MAX14759, MAX14760, MAX14761,

MAX14762, MAX14763, MAX14764