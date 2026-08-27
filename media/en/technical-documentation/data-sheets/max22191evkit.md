<!-- lastmod 2022-08-02 -->
## MAX22191 Evaluation Kit

## General Description

The MAX22191 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the functionality of the MAX22191 digital input in an optical isolator circuit. The EV kit features two circuits: one for a 24V digital input signal and one for a 48V input signal.

## Features

- 24V and 48V Circuits for Easy Evaluation
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX22191

## Quick Start

## Required Equipment

- MAX22191 EV kit
- 24V Digital signal generator
- Oscilloscope

## Startup Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Ensure that the jumpers are in the default position (Table 1).
- 2) Connect the digital signal generator to the IN+ test point (TP3) and IN- test point (TP4).
- 3) Connect the oscilloscope to the IN+ test point (TP3), and the OUT (TP14) test point. Connect return terminals to the IN- test point (TP4)
- 4) Set the digital signal generator to generate a 0V24V 2kHz pulse.
- 5) Turn on the digital signal generator.
- 6) Monitor the IN+ and OUT signals. Verify that the OUT signal toggles as expected.

<!-- image -->

## Detailed Description of Hardware

The  MAX22191  EV  kit  is  a  fully  assembled  and  tested circuit board for evaluating the MAX22191 digital input (DI) with either a 24V or 48V input.

## Powering the MAX22191 EV Kit

The  MAX22191  can  be  powered  parasitically,  from  the signal  on  IN,  or  from  a  local  V CC   supply.  To  power  the circuit parasitcally, ensure that the V CC  jumper is set to LOW (J9 or J10 is 2-3) and apply a digital input signal to IN+.

To power the circuit from a local power supply, connect the V CC  jumper to 'TP' (J9 or J10 to 1-2) and apply a 3V to 5.5V supply to the V CC  test point.

## Selecting the Test Circuit (24V or 48V)

The  MAX22191  EV  kit  supports  0-24V  or  0-48V  digital input  (DI)  signals.  These  circuits  are  clearly  labeled  on the silkscreen.

In the 48V circuit, R1 and R2 are using to shift the input voltage, such that the IEC 61131-2 thresholds are met for a 48V input signal. Additionally, R1 limits surge current, allowing for a higher voltage TVS clamp on the input.

Apply the digital input (DI) signal to the J1 terminal block when  using  signal  voltages  above  30V.  Apply  the  DI signal to the J2 terminal block when using signal voltages below 30V.

## Testing the MAX22191 as a Current-Sinking Input

The MAX22191 EV kit can be used to evaluate the device in either a current sinking or current sourcing configuration.

To test the MAX22191 as a current sinking input, connect the proximity sensor/switch to the IN+ test point (TP1 or TP3) or terminal block (J1 or J2) on the EV kit. Connect the negative/return terminal of the sensor/switch to positive output  of  the  24V  or  48V  supply.  Connect  the  return terminal of the supply to the IN- test point (TP2 or TP4) or terminal block (J1 or J2).

## Evaluates: MAX22191

## Testing the MAX22191 as a Current Sourcing Input

The MAX22191 EV kit can be used to evaluate the device in either a current sinking or current sourcing configuration.

To  test  the  MAX22191  as  a  current  sourcing  input, connect the proximity sensor/switch to the negative terminal of the 24V or 48V supply. Connect the positive terminal of the supply to to the IN+ test point (TP1 or TP3) or terminal block (J1 or J2) on the EV kit. Connect the negative/return terminal of the sensor/switch to IN- test point (TP2 or TP4) or terminal block (J1 or J2).

## Evaluating the MAX22191 with an Optical Isolator (V CC  = 0V)

The  MAX22191  includes  an  on-board  high-speed  optical isolator for easy evaluation. To use the optical isolator, set VCC = 0V (J9 or J10 to 2-3) and connect an isolated supply between 2.7V and 5.5 to the V DD  test point (TP9 or TP11) on the isolated side of the board. Connect an oscillopscope to the VO test point (TP10 or TP12) to see the output of the isolator switch as the input signal (IN+) switches.

## Evaluating the MAX22191 with an Optical Isolator (3V ≤ V CC  5.5V)

OUT is a push-pull buffered output when V CC  is present. Remove the R13 or R15 resistor and connect a resistive load to R9/R10 to test functionality in this mode.

│

## MAX22191 Evaluation Kit

## Table 1. Jumper Table (J3-J12)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                    |
|----------|------------------|--------------------------------------------------------------------------------------------------------------------------------|
| J3       | Open             | 58V TVS diode connected to IN+ on 48V circuit.                                                                                 |
| J3       | Closed*          | 58V TVS diode not connected to IN+ on 48V circuit.                                                                             |
| J4       | Open             | 33V TVS diode connected to IN+ on 24V circuit.                                                                                 |
| J4       | Closed*          | 33V TVS diode not connected to IN+ on 24V circuit.                                                                             |
| J5       | Open*            | 10Ω resistor connected between IN- and GND pin on IC on 48V circuit. This resistor can be used to monitor return current.      |
| J5       | Closed           | IN- is connected directly to GND pin on the IC on the 48V circuit.                                                             |
| J6       | Open*            | 10Ω resistor connected between IN- and GND pin on IC on 24V circuit. This resistor can be used to monitor return current.      |
| J6       | Closed           | IN- is connected directly to GND pin on the IC on the 24V circuit.                                                             |
| J7       | Open*            | 10nF capacitor connected to IN+ on 48V circuit.                                                                                |
| J7       | Closed           | 10nF capacitor not connected to IN+ on 48V circuit.                                                                            |
| J8       | Open*            | 10nF capacitor connected to IN+ on 24V circuit.                                                                                |
| J8       | Closed           | 10nF capacitor not connected to IN+ on 24V circuit.                                                                            |
| J9       | 1-2              | VCC is connected low on the 48V circuit.                                                                                       |
| J9       | 2-3*             | VCC is connected to the test point (TP5) on the 48V circuit. Connect an external 3V to 5.5V supply to VCC to power the device. |
| J10      | 1-2              | VCC is connected low on the 24V circuit.                                                                                       |
| J10      | 2-3*             | VCC is connected to the test point (TP6) on the 24V circuit. Connect an external 3V to 5.5V supply to VCC to power the device. |
| J11      | 1-2              | TEST is connected to GND on the 48V circuit.                                                                                   |
| J11      | 2-3*             | TEST is connected to the TEST test point (TP7) on the 48V circuit.                                                             |
| J12      | 1-2              | TEST is connected to GND on the 24V circuit.                                                                                   |
| J12      | 2-3*             | TEST is connected to the TEST test point (TP8) on the 24V circuit.                                                             |

│

Evaluates: MAX22191

## MAX22191 Evaluation Kit

## MAX22191 EV Kit Bill of Materials

Evaluates: MAX22191

| CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF ; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R;   | 58V DIODE; TVS; SMA; VRM=58V; IPP=4.3A   | DIODE; TVS; SMA (DO-214AC); VRM=33V; IPP=7.5A CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; RIGHT ANGLE; 2PINS -55   | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 2PINS; DEGC TO +125 DEGC CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS; -55 DEGC TO +125 DEGC   | G-S                           | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 4PINS RESISTOR; SMT; 1.5K OHM; 2%; 1W; CARBON FILM RESISTOR; 0603; 1.2K; 1%; 100PPM; 0.10W; THICK FILM   | RESISTOR, 0805, 10 OHM, 1%, 100PPM, 0.125W, THICK FILM RESISTOR; 0402; 40.2K OHM; 1%; 100PPM; 0.063W; THICK FILM   | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM   | RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM   | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE; TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE   | FINISH; TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE   | FINISH; EVKIT PART-IC; PARASITICALLY POWERED TYPE 3 DIGITAL INPUT;   | PACKAGE DWG NO.: 21-0058; PACKAGE LAND PATTERN: 90-0175; SOT23-6   | IC; OPTO; ULTRA LOW POWER 10MBD DIGITAL CMOS OPTOCOUPLER; NSOIC8 PCB:MAX22191 RESISTOR; 0603; 1.5K; 1%; 100PPM; 0.10W; THICK FILM   | RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM   |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|---------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| 0.01UF                                                                                                                                                                                           | 1UF                                      | 33V 1729018                                                                                                                   | TSW-102-23- G-S TSW-103-23-                                                                                                                           | TSW-104-23- G-S               | 1.5K 1.2K                                                                                                                                               | 10 40.2K                                                                                                           | 10K                                                  | 0                                                       | N/A N/A                                                                                                                                                              | N/A                                                                                                                        |                                                                      | MAX22191AU T+                                                      | ACPL-061L- 560E PCB 1.5K                                                                                                            | 0                                                       |
| MURATA MURATA;                                                                                                                                                                                   | TDK DIODES INCORPORATED VISHAY GENERAL   | SEMICONDUCTOR 1729018 PHOENIX CONTACT                                                                                         | SAMTEC SAMTEC                                                                                                                                         | SAMTEC                        | VISHAY BEYSCHLAG VISHAY DALE                                                                                                                            | VISHAY DALE;PANASONIC VISHAY DALE                                                                                  | VISHAY DALE;PANASONIC                                | YAGEO PHYCOMP;VENKEL LTD.                               | KEYSTONE KEYSTONE                                                                                                                                                    |                                                                                                                            | 5014 KEYSTONE                                                        | MAXIM BROADCOM MAXIM                                               | LIMITED VISHAY DALE                                                                                                                 | YAGEO PHYCOMP;VENKEL LTD.                               |
| GRM188R72A103KA01 GRM188R61A105KA61;                                                                                                                                                             | C1608X5R1A105K SMAJ58CA                  | SMAJ33CA                                                                                                                      | TSW-102-23-G-S                                                                                                                                        | TSW-103-23-G-S TSW-104-23-G-S | CMB02070X1501G                                                                                                                                          | CRCW06031K20FK CRCW080510R0FK;ERJ- 6ENF10R0V                                                                       | CRCW040240K2FK CRCW060310K0FK;ERJ- 3EKF1002          | RC0402JR-070RL; CR0402- 16W-000RJT                      | 5010                                                                                                                                                                 | 5011                                                                                                                       |                                                                      | MAX22191AUT+                                                       | ACPL-061L-560E MAX22191 CRCW06031K50FK                                                                                              | RC0402JR-070RL; CR0402- 16W-000RJT DO NOT PROCURE       |
| 4                                                                                                                                                                                                | 2 1                                      | 1 2                                                                                                                           | 6                                                                                                                                                     | 4 2                           | 1                                                                                                                                                       | 1 2                                                                                                                | 2 2                                                  | 4                                                       | 4 4                                                                                                                                                                  |                                                                                                                            | 8                                                                    | 2 2 1                                                              | 0                                                                                                                                   | 0 55 ; DNP-->                                           |
| -                                                                                                                                                                                                | - -                                      | - -                                                                                                                           | -                                                                                                                                                     | - -                           | - -                                                                                                                                                     | - -                                                                                                                | -                                                    | -                                                       | - -                                                                                                                                                                  |                                                                                                                            | -                                                                    | -                                                                  | - - DNP                                                                                                                             | DNP                                                     |
| C1, C2, C5, C6                                                                                                                                                                                   | C3, C4 D1                                | D2 J1, J2                                                                                                                     | J3-J8                                                                                                                                                 | J9-J12 J17, J18               | R1 R2                                                                                                                                                   | R3, R4 R5, R6                                                                                                      | R11, R12                                             | R13, R15, R18, R19                                      | TP1, TP3, TP9, TP11                                                                                                                                                  | TP2, TP4, TP15, TP16                                                                                                       | TP5-TP8, TP10, TP12- TP14                                            | U1, U2                                                             | U3, U4 PCB R9, R10                                                                                                                  | R16, R17 DNI--> DO NOT INSTALL(PACKOUT)                 |
| 1                                                                                                                                                                                                | 2 3                                      | 4 5                                                                                                                           | 6                                                                                                                                                     | 7 8                           | 9 10                                                                                                                                                    | 11 12                                                                                                              | 13                                                   | 14                                                      | 15                                                                                                                                                                   | 16                                                                                                                         | 17                                                                   | 18 19 20                                                           | 21                                                                                                                                  | 22 TOTAL NOTE:                                          |

## MAX22191 EV Kit PCB Layout Diagrams

MAX22191 EV Kit-Top Silkscreen

<!-- image -->

MAX22191 EV Kit-Top Silkscreen

<!-- image -->

MAX22191 EV Kit-Top

<!-- image -->

MAX22191 EV Kit-Top Silkscreen

<!-- image -->

│

## MAX22191 EV Kit Schematic

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22191EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX22191

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/18            | Initial release | -               |

For information on other Maxim Integrated products, visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. 0a[iP InteJrated reserYes the riJht to chanJe the circuitry and speci¿cations without notice at any tiPe.

│

Evaluates: MAX22191