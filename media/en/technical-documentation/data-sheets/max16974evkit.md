<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX16974 Evaluation Kit

## General Description

Features

The MAX16974 evaluation kit (EV kit) provides a proven design to evaluate the MAX16974 high-voltage, 2.2MHz, 2A  automotive  step-down  controller  with  low  operating current. It is designed to operate with 3.5V to 28V input voltages, while using only 35µA quiescent current at no load. The switching frequency is adjustable from 220kHz to 2.2MHz and the output voltage is pin selectable at 5V fixed or 1V to 10V adjustable. This EV kit is initially set up to operate at 2.2MHz with a 5V output.

The EV kit PCB comes with a MAX16974AUE/V+ installed.

- S Wide 3.5V to 28V DC Supply Range
- S 42V Input Transient Tolerance
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16974EVKIT+ | EV Kit |

## Component List

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                         |
|---------------|-------|-------------------------------------------------------------------------------------|
| CBST          |     1 | 0.1µF Q 10%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J104K                   |
| CCOMP1        |     1 | 5600pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H562K                |
| CCOMP2        |     0 | Not installed, 120pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H121J   |
| CCRES         |     1 | 100pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H101J                  |
| CFB1          |     0 | Not installed, ceramic capacitor (0603)                                             |
| CIN1          |     1 | 47µF Q 20%, 50V electrolytic capacitor (D8) Panasonic EEE-FK1H470XP                 |
| CIN2, CIN3    |     2 | 0.1µF Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K                |
| CIN4, CIN5    |     2 | 4.7µF Q 10%, 50V X7R ceramic capacitors (1210) Murata GRM32ER71H475K                |
| COUT, COUT2   |     2 | 22µF Q 20%, 10V X7R ceramic capacitors (1210) Murata GRM32ER71A226K                 |
| CSNUB         |     0 | Not installed, 1000pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102K |

| DESIGNATION      |   QTY | DESCRIPTION                                                                      |
|------------------|-------|----------------------------------------------------------------------------------|
| CVL              |     1 | 2.2µF Q 10%, 10V X7R ceramic capacitor (0603) Murata GRM188R71A225K              |
| D1               |     1 | 3A, 60V Schottky diode Diodes Inc. B360B                                         |
| JU1              |     1 | 3-pin header                                                                     |
| JU2, JU7         |     0 | Not installed, 0 I jumpers (0603)                                                |
| JU3, JU6, RTEST  |     3 | 0 I Q 5% resistors (0603)                                                        |
| L1               |     1 | 4.7µH Q 20%, 2.8A, 20m I inductor (7.0mm x 7.5mm) Panasonic ETQP5M4R7YFM         |
| LX               |     0 | Not installed, multipurpose test point                                           |
| RCOMP            |     1 | 20k I Q 1% resistor (0603)                                                       |
| RFB1, RFB2, RFB3 |     0 | Not installed, resistors (0603)                                                  |
| RFOSC            |     1 | 12.1k I Q 1% resistor (0603)                                                     |
| RFSYNC           |     1 | 20k I Q 5% resistor (0603)                                                       |
| RRESB            |     1 | 10k I Q 5% resistor (0603)                                                       |
| RSNUB            |     0 | Not installed, 3 I Q 5% resistor (0603)                                          |
| U1               |     1 | High-voltage automotive step- down converter (16 TSSOP-EP*) Maxim MAX16974AUE/V+ |
| -                |     1 | Shunts                                                                           |
| -                |     1 | PCB: MAX16974 EVALUATION KIT+                                                    |

/V denotes an automotive qualified part.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16974 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX16974 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX16974	EV	kit
- 12V	at	2A	DC	power	supply
- Digital	voltmeter	(DVM)
- 2A	DC	load	(2.5 I , 10W)

## External Clock Input (FSYNC)

The IC synchronizes to an external clock signal applied at FSYNC. The signal at FSYNC must have a 10% higher frequency  than  the  internal  clock  period  for  proper synchronization.

## Output-Voltage/RESET Threshold Resistive-Divider Network

The  output  voltage  of  the  IC  can  be  programmed between 1V and 10V. Although the IC's output voltage and  reset  threshold  can  be  set  individually,  the  EV  kit supports the use of a combined resistive-divider network to set the desired output voltage and the reset threshold using three resistors (RFB1, RFB2, and RFB3). Use the following formula to determine the RFB3 of the resistivedivider network:

( ) REF OUT RFB3= RFB1+RFB2+RFB3 V /V ×

where VREF = 1V and VOUT is the desired output voltage.

( ) ( ) REF\_RES RES RFB2= RFB1+RFB2+RFB3 V /V RFB3 × -

where VREF\_RES is 1.2V (refer to the Electrical Characteristics section in the MAX16974 IC data sheet) and VRES is the desired reset threshold in volts.

The precision of  the  reset-threshold  function  is  dependent on the tolerance of the resistors used for the divider. Refer to the MAX16974 IC data sheet for details.

Some applications require the addition of a compensation capacitor at CFB1. Contact the factory for applications assistance.

The  0 I resistors  at  JU3  and  JU6  must  be  moved  to locations JU2 and JU7 to enable the combined resistivedivider  network.  As  shipped  from  the  factory,  the  0 I resistors are installed at JU3 and JU6, so that FB is tied to VL and RESETI is tied to ground, selecting the factory settings.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify that all jumpers (JU1, JU2, JU3, JU6, and JU7) are in their default positions, as shown in Table 1.
- 2)  Connect the DVM between the VOUT and GND pads.
- 3)  Connect the load between the VOUT and GND pads.
- 4)  Connect  the  power  supply  between  the  EXT\_VBAT and GND pads.
- 5)  Enable the 12V power supply.
- 6)  Verify that VOUT = 5V.
- 7)  Verify that RESB is high.

## Detailed Description of Hardware

The MAX16974 EV kit provides a proven layout for the MAX16974 IC.  The  EV  kit  is  designed  to  fully  demonstrate the functionality of the IC as follows:

- Verify	output-voltage	regulation
- Verify	 power-good	 behavior	 and	 reset-threshold selection
- Easy	 programmability	 of	 different	 output	 voltages between 1V and 10V
- Startup	and	shutdown	performance
- Current-limit	performance

The  following  detailed  descriptions  enable  the  user  to program the EV kit per application requirements.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16974 Evaluation Kit

The RES signal is asserted when RESETI is below 1.2V. The RFB1, RFB2, and RFB3 values should be chosen to set RESETI = 1.2V when the OUT voltage is too low. The recommended resistor-divider bias current is 50 F A.

comparator  is  1.25V.  The  CRES  pin  sources  approximately 10µA current. Placing a capacitor (CCRES) from CRES to  GND  programs  the  delay  time  of  the  powergood indicator.

## Reset-Timeout Selection

The CRES pin of the IC is for programming the powergood delay for the IC. The internal threshold of the CRES

## Output-Voltage Selection

Contact  the  factory  for  assistance  in  selecting  components for other output voltages.

Table 1. Jumper Descriptions (JU1, JU2, JU3, JU6, JU7)

| JUMPER   | SIGNAL   | SHUNT POSITION        | DESCRIPTION                                                                                                                  |
|----------|----------|-----------------------|------------------------------------------------------------------------------------------------------------------------------|
| JU1      | EN       | 1-2*                  | EN is tied to VSUP (battery input); normal operation.                                                                        |
| JU1      | EN       | 2-3                   | EN is tied to GND; shutdown.                                                                                                 |
| JU2      | FB       | 0 I jumper installed  | Output voltage is determined by RFB1, RFB2, and RFB3. OUT regulates FB to 1.00V at the RFB2/RFB3 junction. JU3 must be open. |
| JU2      | FB       | Open*                 | JU3 should be installed. See the JU3 description.                                                                            |
| JU3      | FB       | 0 I jumper installed* | FB is tied to BIAS; the output voltage is preset to 5V. JU2 must be open.                                                    |
| JU3      | FB       | Open                  | JU2 should be installed. See the JU2 description.                                                                            |
| JU6      | RESETI   | 0 I jumper installed* | RESETI is tied to GND; the reset threshold is preset to 90% of VOUT. JU7 must be open.                                       |
| JU6      | RESETI   | Open                  | JU7 should be installed. See the JU7 description.                                                                            |
| JU7      | RESETI   | 0 I jumper installed  | Reset threshold is determined by RFB1, RFB2, and RFB3. Reset occurs when RESETI drops down to 1.2V. JU6 must be open.        |
| JU7      | RESETI   | Open*                 | JU6 should be installed. See the JU6 description.                                                                            |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX16974 Evaluation Kit

Figure 1. MAX16974 EV Kit Schematic

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16974 Evaluation Kit

<!-- image -->

Figure 2. MAX16974 EV Kit Component Placement GuideComponent Side

Figure 3. MAX16974 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX16974 EV Kit PCB Layout-Ground Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX16974 Evaluation Kit

<!-- image -->

Figure 5. MAX16974 EV Kit PCB Layout-Layer 3

Figure 6. MAX16974 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX16974 EV Kit Component Placement GuideSolder Side

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16974 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/10           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.