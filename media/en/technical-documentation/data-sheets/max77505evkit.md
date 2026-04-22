<!-- lastmod 2024-02-19 -->
<!-- image -->

## General Description

The MAX77505 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the MAX77505 hysteretic step-down (buck) converter. The EV kit  is  a  step-down  voltage  regulator  circuit  using  the MAX77505 that is capable of a 2.5V to 16V input, 3A of continuous load, and an adjustable output voltage between 0.8V to 5.5V using an R SEL  resistor between the SEL pin and GND.

## Features

- Proven PCB Reference Design and Layout
- Easy to Use
- Simple Hardware Control: Jumpers and Test Points for IN, EN, SEL, VL, POK, VIO, and OUT
- Fully Assembled and Tested
- On-board Potentiometer for Setting the Desired Output Voltage on Startup.

## EV Kit Photo

<!-- image -->

319-101031; Rev 0; 10/23

## Check List

- MAX77505 EV Kit
- Adjustable DC  Power  Supply with 16V and 3A Capability
- Digital Mult-Meters
- Electronic Load

## EV Kit Default Specification

Table  1 specifies  the  electrical  characteristics  of  the MAX77505 device. Table 2 specifies  the  default  jumper configurations on the EV kit.

- IC Part Number -MAX77505AEFB+
- Switching Current Limit = 4.6A
- Input Voltage = 2.5V to 16V
- Output Voltage = 3.3V

Ordering Information appears at end of data sheet.

Evaluates: MAX77505

## Table 1. EV Kit Specifications

VIN  = 7.6V, V OUT  = 3.3V, T A  = T J  = -40°C to +125°C, typical values are at T A  = T J  = +25°C, unless otherwise noted.

| PARAMETER                         | CONDITIONS                                | MIN   | TYP   | MAX   | UNITS   |
|-----------------------------------|-------------------------------------------|-------|-------|-------|---------|
| Operating Input Voltage Range     |                                           | 2.5   |       | 16    | V       |
| Output Voltage Range              | Selectable through R SEL . Default = 3.3V | 0.8   |       | 5.5   | V       |
| Input Undervoltage Lockout (UVLO) | V IN Rising                               | 2.4   | 2.45  | 2.5   |         |
|                                   | V IN Falling                              | 2.325 | 2.375 | 2.425 | V       |
| Shutdown Current                  | EN = Low, V IN < 13V, T J = +25°C         |       | 70    | 300   | nA      |
| Quiescent Current                 | EN = High, No Load, T J = +25°C           |       | 800   |       | µA      |

## Table 2. Jumper Connection Guide

| JUMPER   | NODE   | SHUNT POSITION   | FUNCTION                                                |
|----------|--------|------------------|---------------------------------------------------------|
| J1       | EN     | 1-2*             | Connects EN to IN to enable the MAX77505.               |
| J1       | EN     | 3-4              | Connects EN to SW1 through a 10k Ω pullup resistor.     |
| J1       | EN     | 5-6              | Connects EN to GND to disable the MAX77505.             |
| J2       | POK    | 1-2              | Connects POKB to VIO** through a 10k Ω pullup resistor. |
| J2       | POK    | 2-3*             | Connects POKB to VL through a 10k Ω pullup resistor.    |
| J3       | SEL    | 1-2*             | Connects SEL to a 0 Ω resistor (Sets V OUT to 3.3V).    |
| J3       | SEL    | 2-3              | Connects SEL to the on-board potentiometer.             |

*Default position

**VIO is external voltage with a maximum value of 2.0V. It can be connected to the EXT\_VIO terminal.

## Quick Start Guide

## Required Equipment

- MAX77505 EV Kit
- Adjustable DC Power Supply which supports 16V and 3A
- Digital Multimeter
- Electronic Load

## Setup Overview

The typical application diagram for the MAX77505 is given in Figure 1 . Figure 2 describes the connections for a typical test setup that is used to evaluate MAX77505. See the MAX77505 EV Kit Schematic and MAX77505 EV Kit PCB Layout sections for more information.

Figure 1. MAX77505 Typical Application Circuit

<!-- image -->

Evaluates: MAX77505

## Evaluates: MAX77505

Figure 2. MAX77505 EV Kit Board Connections

<!-- image -->

## Procedure

The EV kit is fully assembled and tested. Follow the steps to make the required hardware connections, and start the operation of the EV kit.

1.  Install the EV kit jumpers according to Table 2 .
2.  Connect a DVM between INS and PGNDS test points to measure input voltage.
3.  Connect a DVM between the OUTS and PGND1S test points to measure the output voltage.
4.  Apply a power supply set to 0V (100mA current limit) through an ammeter (1mA range) across the IN and PGND terminals of the EV kit. Turn the supply on and increase the voltage to 7.6V.
5.  Confirm the input and output voltages through the input and output DVMs. The default output voltage is 3.3V. The input ammeter should give a reading near 1µA.
6.  Ensure that the ammeter is either shorted out or the ammeter range is increased before drawing load through the output of the MAX77505 EV kit. If this is not done, the voltage drop across the input ammeter causes the MAX77505 to go into undervoltage lockout.

## Detailed Description of Hardware

The MAX77505 EV kit demonstrates the operation of the low-quiescent current (800nA typ) hysteretic buck converter which can support input voltages from 2.5V to 16V with an adjustable output voltage between 0.8V to 5.5V. The output voltage  is  set  when  the  part  starts  up  by  reading  the  SEL  pin  which  has  R SEL   connected  to  ground.  The  default configuration as shown in Table 2 is set for an output voltage of 3.3V. The jumper J3 must be moved to position 2-3 to use  the  potentiometer  as  R SEL .  The  user  also  has  the  flexibility  of  using  their  resistance  by  disconnecting  J3  and connecting the desired resistance between position 1-2.

The part supports output voltage of 0.8V to 5.5V, however, the minimum recommended output capacitance for each voltage should be chosen from Table 3 for  best operation. It is also important to consider the voltage derating of the ceramic capacitors when using them as output capacitors since Table 3 lists the minimum effective output capacitance the part needs for best operation. The EV kit comes populated with an output capacitance of 2 x 10µF 25V X7S 0805 ceramic capacitors marked C6 and C7 on the silkscreen. The exact component used is listed in the MAX77505 EV Kit Bill of Materials .

## Table 3. Recommended Output Capacitance

| OUTPUT VOLTAGE (V)   |   MINIMUM EFFECTIVE OUTPUT CAPACITANCE (µF) |
|----------------------|---------------------------------------------|
| 0.8 to 1.5           |                                          20 |
| 1.5 to 5.5           |                                          10 |

This evaluation kit should be used with the following documents:

- MAX77505 Data Sheet
- MAX77505 EV Kit Data Sheet (this document)

## Setting the Output Voltage

The EV kit has an on-board potentiometer to allow the user to evaluate the entire output voltage range of the MAX77505.

Use the following steps to evaluate a different output voltage.

1.  Disable the MAX77505 by either removing the input power supply or by connecting J1 to jumpers 5-6.
2.  Remove Jumper J3 and connect a DVM set to measure resistance between pin 3 of J3 and AGND.
3.  Set the potentiometer resistance for the desired output voltage using Table 4 .
4.  Remove the DVM and connect J3 to position 2-3.
5.  Re-enable the MAX77505 by reversing step 1.

## Table 4. Output Voltage Selection

| R SEL (Ω)   |   V OUT (V) | R SEL (Ω)   |   V OUT (V) |
|-------------|-------------|-------------|-------------|
| ≤95.3       |         3.3 | 3.74k       |         3   |
| 200         |         0.8 | 8.06k       |         3.2 |
| 309         |         0.9 | 12.4k       |         3.4 |
| 422         |         1   | 16.9        |         3.6 |
| 536         |         1.1 | 21.5k       |         3.7 |
| 649         |         1.2 | 26.1        |         3.8 |
| 768         |         1.3 | 30.9        |         4   |
| 909         |         1.5 | 36.5        |         4.2 |
| 1.05k       |         1.8 | 42.2k       |         4.3 |
| 1.21k       |         1.9 | 48.7k       |         4.5 |
| 1.40k       |         2.2 | 56.2k       |         5   |
| 1.62k       |         2.3 | 64.9k       |         5.2 |
| 1.87k       |         2.5 | 75.0k       |         5.3 |
| 2.15k       |         2.7 | 86.6k       |         5.5 |
| 2.49k       |         2.8 | 100k        |         3.1 |
| 3.87k       |         2.9 | ≥115k       |         4.8 |

## Measuring the Efficiency

The MAX77505 hysteretic buck converter shows excellent efficiency performance for a wide load range. The EV kit is equipped with sense pins for accurately measuring input voltage (INS, PGNDS) and output voltage (OUTS, PGND1S). It is important to use the pins for the most accurate results for efficiency, load regulation, and line regulation tests.

Warning: It is important not to connect the electronic load or DC power supply to the sense pins. These pins are not designed to carry large amounts of current and are only designed to measure voltages. Drawing any large current through

Evaluates: MAX77505

## MAX77505 Evaluation Kit

## Evaluates: MAX77505

these pins can damage the EV kit and exhibit less than optimal performance due to higher resistance. Use input supply terminals for connecting to input supply and output terminals for connecting to electronic load as shown in Figure 2 .

The following steps explain how to measure the efficiency of MAX77505 using the EV kit.

Connect a DC power supply set to 0V with an ammeter in series to the IN and PGND terminals of the EV kit. Connect an electronic load with an ammeter in series to the OUT and PGND terminals of the EV kit. It is important to note that the wires to the electronic load should be thick and short to ensure minimal voltage drop across the resistance of the wires at a full load of 3A. It is also important to note that the electronic load should be able to support  the  burden  voltage,  especially  at  a  minimum  output  voltage  of  0.8V,  if  that  is  the  test  case.  It  is recommended to use the highest range setting on the output ammeter to prevent blowing the fuse in the digital ammeter as well as to prevent output voltage dropping too much as seen by the electronic load. Make sure that the electronic load is off.

Connect a digital multimeter to INS and PGNDS to measure input voltage, and OUTS and PGND1S to measure the output voltage.

Ensure that J2 is disconnected and J1 is connected between position 1-2.

Select the default position for J3 if the required output voltage is 3.3V. Follow the steps listed in the Setting the Output Voltage section if the required output voltage is different from the default output voltage of 3.3V. Make sure the output capacitance on the evaluation board follows Table 3 .

Set the desired input voltage (2.5V to 16V) at the DC power supply and turn it on.

Ensure that the output voltage is correct from the output voltage multimeter. If not, repeat the steps outlined in the Setting the Output Voltage section.

Set the desired load current (max 3A) at the electronic load and turn it on.

Measure the efficiency only after allowing the output voltage to settle. It is recommended to use the highest integration time setting (100 NPLC) at the multimeters to get the most accurate measurement.

Once the measurement is complete, turn off the electronic load followed by the DC power supply.

## Critical Node Measurement (OUT1 and LX1)

The EV kit provides socket test points for the measurement of critical nodes such as LX1 and OUT1. These probe points can be seen in Figure 2 . It is important to use a probe with a pig-tail connector attached and connected directly to the test points as shown in Figure 3 . The pig-tail connector serves to minimize the ground loop inductance for the measurement thereby minimizing the noise coupling. This method gives the most accurate results for output voltage ripple, switching waveforms, and load transients.

naxim

Figure 3. MAX77505 Critical Node Measurement

<!-- image -->

## MAX77505 Evaluation Kit

## Bode Plot Measurement

The EV kit comes equipped with test points SIG\_P and SIG\_N across a 0 Ω resistor R3 placed between converter output voltage OUT and MAX77505 feedback pin OUTS. These test points can be used to apply a disturbance and measure the changes in the output voltage for a bode plot measurement. It is important to note that R3 should be replaced with a 1 Ω resistance before such measurement is attempted. Figure 4 details the bode plot measurement setup using a Bode100. A similar setup can be used for any other device that is used for bode plot measurement.

Figure 4. MAX77505 Bode Plot Measurement

<!-- image -->

## High-Temperature Testing

The MAX77505 is rated for operation under junction temperatures up to +125°C. Note that not all components on the EV kit are rated for temperatures this high. Some ceramic and tantalum capacitors experience extra leakage when put under temperatures higher than they are rated for and supply current readings for the IC might be higher than expected. Doublecheck the components on the EV kit if testing at +125°C ambient or junction temperatures. Consider replacing these components  if  IC  operation  at  +125°C  ambient  or  junction  temperature  is  an  important  use  case.  C4  (input  bulk capacitance) is not rated for +125°C.

## Ordering Information

| PART            | U1 IC         | DEFAULT OUTPUT VOLTAGE   | TYPE   |
|-----------------|---------------|--------------------------|--------|
| MAX77505QEVKIT# | MAX77505AEFB+ | 3.3V                     | EV Kit |

Evaluates: MAX77505

## MAX77505 Evaluation Kit

## MAX77505 EV Kit Bill of Materials

| PART                                                             | QTY                                                              | MFG PART #                                                       | MANUFACTURER                                                     | VALUE                                                            | DESCRIPTION                                                                                                                                                       |
|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C1, C2                                                           | 2                                                                | CGA4J1X7R1V475K125AE; CGA4J1X7R1V475K125AC                       | TDK;TDK                                                          | 4.7UF                                                            | CAP; SMT (0805); 4.7UF; 10%; 35V; X7R; CERAMIC                                                                                                                    |
| C3                                                               | 1                                                                | C1005X7R1E224K050BB                                              | TDK                                                              | 0.22UF                                                           | CAP; SMT (0402); 0.22UF; 10%; 25V; X7R; CERAMIC                                                                                                                   |
| C5                                                               | 1                                                                | C1005X7S0J225K050BC; RM155C70J225KE11                            | TDK;MURATA                                                       | 2.2UF                                                            | CAP; SMT (0402); 2.2UF; 10%; 6.3V; X7S; CERAMIC                                                                                                                   |
| C6, C7                                                           | 2                                                                | GRM21BC71E106KE11                                                | MURATA                                                           | 10UF                                                             | CAP; SMT (0805); 10UF; 10%; 25V; X7S; CERAMIC                                                                                                                     |
| L1                                                               | 1                                                                | 0420CDMCCDS-1R5MC                                                | SUMIDA                                                           | 1.5UH                                                            | INDUCTOR; SMT; COMPOSITE; 1.5UH; 20%; 4.9A                                                                                                                        |
| U1                                                               | 1                                                                | MAX77505AEFB+                                                    | ANALOG DEVICES                                                   | MAX77 505AEF B+                                                  | EVKIT PART - IC; MAX77505AEFB+; 16V LOW IQ 3A/1.5A BUCK CONVERTER; PACKAGE CODE: F102A2F+3; PACKAGE OUTLINE DRAWING: 21-100644; LAND PATTERN: 90-100218; FC2QFN10 |
| R3                                                               | 1                                                                | RC1608J000CS;CR0603-J/- 000ELF;RC0603JR-070RL                    | SAMSUNG ELECTRONICS;BO URNS;YAGEO PH                             | 0                                                                | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                                                                           |
| C8-C10                                                           | DNP                                                              | N/A                                                              | N/A                                                              | OPEN                                                             | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                                                                           |
| R1                                                               | DNP                                                              | N/A                                                              | N/A                                                              | OPEN                                                             | RESISTOR; 0603; OPEN; FORMFACTOR                                                                                                                                  |
| Components below this line are outside of the immediate MAX77505 | Components below this line are outside of the immediate MAX77505 | Components below this line are outside of the immediate MAX77505 | Components below this line are outside of the immediate MAX77505 | Components below this line are outside of the immediate MAX77505 | Components below this line are outside of the immediate MAX77505                                                                                                  |
| AGND, AGND1, IN, OUT, PGND,                                      | 6                                                                | 9020 BUSS                                                        | WEICO WIRE                                                       | MAXIM PAD                                                        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                          |
| EN, POKB, SEL                                                    | 3                                                                | 5002                                                             | KEYSTONE                                                         | N/A                                                              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                                             |
| EXT_VI O, INS, OUTS, VL                                          | 4                                                                | 5000                                                             | KEYSTONE                                                         | N/A                                                              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                  |
| J1                                                               | 1                                                                | PBC03DAAN                                                        | SULLINS ELECTRONICS CORP.                                        | PBC03 DAAN                                                       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                                                                  |
| J2, J3                                                           | 2                                                                | PCC03SAAN                                                        | SULLINS                                                          | PCC03 SAAN                                                       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                          |
| MH1- MH4                                                         | 4                                                                | 9032                                                             | KEYSTONE                                                         | 9032                                                             | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                         |
| PGND1 S, PGNDS                                                   | 2                                                                | 5001                                                             | KEYSTONE                                                         | N/A                                                              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                |
| R2                                                               | 1                                                                | 3296Y-1-204LF                                                    | BOURNS                                                           | 200K                                                             | RESISTOR; THROUGH HOLE-RADIAL LEAD; 3296 SERIES; 200K OHM; 10%; 100PPM; 0.5W                                                                                      |

www.analog.com

Evaluates: MAX77505

## MAX77505 Evaluation Kit

## Evaluates: MAX77505

| PART         | QTY   | MFG PART #                                    | MANUFACTURER                         | VALUE        | DESCRIPTION                                                                                |
|--------------|-------|-----------------------------------------------|--------------------------------------|--------------|--------------------------------------------------------------------------------------------|
| R6           | 1     | RC1608J000CS;CR0603-J/- 000ELF;RC0603JR-070RL | SAMSUNG ELECTRONICS;BO URNS;YAGEO PH | 0            | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                    |
| R4           | 1     | RC0402FR-0710KL;CR0402- FX-1002GLF            | YAGEO;BOURNS                         | 10K          | RES; SMT (0402); 10K; 1%; +/- 100PPM/DEGC; 0.0630W                                         |
| R5           | 1     | ERJ-2RKF1003                                  | PANASONIC                            | 100K         | RES; SMT (0402); 100K; 1%; +/- 100PPM/DEGC; 0.1000W                                        |
| SW1          | 1     | EVQ-Q2K03W                                    | PANASONIC                            | EVQ- Q2K03 W | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC |
| PCB          | 1     | MAX77505Q                                     | ANALOG DEVICES                       | PCB          | PCB:MAX77505Q                                                                              |
| EV_KIT _BOX1 | 4     | NPC02SXON-RC                                  | SULLINS ELECTRONICS CORP.            |              | CONNECTOR; FEMALE; MINI SHUNT; 0.100IN CC; OPEN TOP; JUMPER; STRAIGHT; 2PINS               |
| LX1, OUT1    | DNP   | SS-102-TT-2                                   | SAMTEC                               | SS-102- TT-2 | IC-SOCKET; SIP; STRAIGHT; PRECISION MACHINED SOCKET STRIP; OPEN FRAME; 2PINS; 100MIL       |
| C11, C12     | DNP   | N/A                                           | N/A                                  | OPEN         | CAPACITOR; SMT (1206); OPEN; IPC MAXIMUM LAND PATTERN                                      |
| C4           | 1     | T52M1107M035C0055                             | VISHAY                               | 100UF        | CAP; SMT (7360); 100UF; 20%; 35V; TANTALUM                                                 |

## MAX77505 Evaluation Kit

## MAX77505 EV Kit Schematic

<!-- image -->

## MAX77505 Evaluation Kit

## MAX77505 EV Kit PCB Layout

MAX77505 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX77505 EV Kit PCB Layout -Top

<!-- image -->

## Evaluates: MAX77505

MAX77505 EV Kit PCB Layout -Layer 2

<!-- image -->

MAX77505 EV Kit PCB Layout -Layer 3

<!-- image -->

## MAX77505 EV Kit PCB Layout (continued)

MAX77505 EV Kit PCB Layout -Bottom

<!-- image -->

Evaluates: MAX77505

## MAX77505 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/23           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX77505