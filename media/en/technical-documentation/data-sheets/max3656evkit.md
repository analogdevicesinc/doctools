<!-- lastmod 2022-08-02 -->
## General Description

The  MAX3656  evaluation  kit  (EV  kit)  is  an  assembled demonstration board that provides optical evaluation of the  MAX3656  155Mbps  to  2.5Gbps  burst-mode  laser driver.  The  evaluation  board  allows  connection  with coaxial laser packages as well as BIDI packages.

## EV Kit Contents

- S MAX3656 EV Kit Board

<!-- image -->

## MAX3656 Evaluation Kit

Features

- S Fully Assembled and Tested
- S Adjustable Laser Bias Current
- S Adjustable Laser Modulation Current
- S Single +3.3V Power-Supply Operation

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX3656EVKIT+ | EV Kit |

## Component List

* EP = Exposed pad.

| DESIGNATION        |   QTY | DESCRIPTION                                                       |
|--------------------|-------|-------------------------------------------------------------------|
| C1                 |     1 | 1 F F Q 10% ceramic capacitor (0402) Murata GRM155R61A105KE15D    |
| C2                 |     1 | 1000pF Q 10% ceramic capacitor (0402) Murata GRM155R71H102KA01D   |
| C3, C10-C15        |     7 | 0.1 F F Q 10% ceramic capacitors (0402) Murata GRM155R61A104KA01D |
| C19                |     1 | 10 F F Q 10% tantalum capacitor (B case) AVX TAJB106K010RNJ       |
| C20                |     1 | 0.1 F F Q 10% ceramic capacitor (0603) Murata GRM188R71H104KA93D  |
| C21                |     1 | 0.01 F F Q 10% ceramic capacitor (0603) TDK C1005X8R1E103K        |
| C24                |     1 | 27pF Q 5% ceramic capacitor (0402) Murata GRM1555C1H270JZ01D      |
| D2                 |     1 | Green LED, SMD Panasonic LNJ311G8PRA                              |
| D3, D4             |     2 | Diodes Panasonic MA27P0100L                                       |
| D5                 |     0 | Laser, user supplied                                              |
| J18, J20, TP1, TP2 |     4 | Test points Keystone 5000                                         |
| J23-J26            |     4 | SMA connectors, edge mount, tab contact Johnson 142-0701-851      |

| DESIGNATION                              |   QTY | DESCRIPTION                                             |
|------------------------------------------|-------|---------------------------------------------------------|
| JP26, JP28, JP30, JP32, JP33             |     5 | 3-pin headers, 0.1in center Sullins PEC36SAAN           |
| JP26, JP28, JP30, JP32, JP33             |     5 | Shunts Sullins SSC02SYAN                                |
| L1                                       |     1 | 10nH Q 5% inductor (0402) Murata LQG15HS10NJ02          |
| Q1                                       |     1 | npn transistor Zetex FMMT491ATA                         |
| R1                                       |     1 | 15 I Q 5% resistor (0402)                               |
| R2, R3                                   |     2 | 10 I Q 5% resistors (0402)                              |
| R12, R126                                |     2 | 5.6 I Q 5% resistors (0402)                             |
| R43                                      |     1 | 200 I Q 5% resistor (0603)                              |
| R59, R79, R90                            |     3 | 50k I variable resistors Bourns 3296W-1-503LF           |
| R61, R82, R118                           |     0 | Not installed, resistors (0603)                         |
| R88                                      |     1 | 4.3k I Q 5% resistor (0603)                             |
| R91, R92, R94, R95, R97, R98, R100, R101 |     0 | Not installed, resistors (0402)                         |
| R103, R104                               |     2 | 100 I Q 1% resistors (0402)                             |
| R113-R116                                |     4 | 0 I Q 5% resistors (0402)                               |
| R119                                     |     1 | 3k I Q 5% resistor (0603)                               |
| R120                                     |     1 | 1.5k I Q 5% resistor (0603)                             |
| R121                                     |     1 | 75 I Q 5% resistor (0402)                               |
| U1                                       |     1 | Burst-mode laser driver (24 TQFN-EP*) Maxim MAX3656ETG+ |
| -                                        |     1 | PCB: MAX3656 EVALUATION BOARD+, Rev D                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3656 Evaluation Kit

## Quick Start

To evaluate the MAX3656 with a laser diode, configure the EV kit as follows:

- 1) Pull shunts off all jumpers (JP33, JP30, JP32, JP26, and JP28).
- 2) Set  RAPCSET  to  20k I by  adjusting  the  APCSET variable resistor R79 until the measured resistance between the VAR pin of jumper JP33 and GND is 20k I . Then install a shunt on the VAR side of jumper JP33.
- 3) Set  RMODSET  to  20k I by  adjusting  the  MODSET variable resistor R59 until the measured resistance between the VAR pin of jumper JP30 and GND is 20k I . Then install a shunt on the VAR side of jumper JP30.
- 4) Set  RBIASMAX  to  7k I by  adjusting  the  BIASMAX variable resistor R90 until the measured resistance between the VAR pin of jumper JP32 and GND is 7k I . Then install a shunt on the VAR side of jumper JP32.
- 5) Connect the EN pin to GND by installing a shunt on the GND side of jumper JP26.
- 6) Connect the LONGB pin to GND by installing a shunt on the GND side of jumper JP28.
- 7) Solder a laser to edge connection D5. See Figure 1 for a view of how the laser should be mounted on the EV kit. Be sure to keep the laser leads as short as possible to minimize parasitic inductance.
- 8) Connect a differential data source to IN+ (J26) and IN-  (J25)  and  a  differential  burst-enable  source to  BEN+  (J24)  and  BEN-  (J23).  Make  sure  the differential  signals  are  between  200mVP-P  and 1600mVP-P  and  the  common-mode  is  between (VCC - 1.49V) and (VCC - VIN/4). See the Applications Information section for more options.
- 9) Attach a +3.3V power supply to J18 (+3.3V) and J20 (GND). Set the current limit to 250mA.
- 10)  Connect  the  output  of  the  user-supplied  laser to  an  optical-to-electrical  converter  that  has  the appropriate bandwidth  (filter) for the intended application.
- 11)  Turn on the power supply and adjust APCSET (R79) for  the  desired  average  optical  power,  then  adjust MODSET (R59) for the desired extinction ratio.

Note: The  APC  loop  is  functional  when  the FAIL indicator, green LED D2, is on. The LED is off if the BIASMAX is set too low, the monitor diode (MD) pin is not connected, or the modulation current is set too high.

- 12)  If the eye diagram contains too much overshoot or the rise/fall times are too slow, experimentally adjust the values of the RL peaking network (R3, L1) and RC shunt network (R121, C24) to better match the characteristics of the laser.

## Applications Information

## Continuous Mode Operation

For  continuous  mode  operation,  switch  the  differential burst-enable input (BEN Q )  to  a  constant high in one of two ways:

- Remove	resistor	R103.	Install	a	1k I resistor on R101 and 3k I resistors on R91, R92, and R100.
- Connect	 a	 +2.3V	 supply	 to	 BEN+	 and	 a	 +1.7V supply to BEN- (or a differential 0.6V supply between BEN+ and BEN-).

## LVPECL Input Terminations

If needed, an LVPECL  Thevenin equivalent load termination of 50 I to (VCC - 2V) can be created by doing the following:

- Remove	resistors	R103	and	R104.
- Solder	130 I resistors on R92, R94, R98, and R101.
- Solder	82 I resistors on R91, R95, R97, and R100.

For  more  information,  refer  to  Application  Note  291: HFAN-01.0: Introduction to LVDS, PECL, and CML.

## LVCMOS Burst Enable

To  drive  the  burst-enable  input  (BEN+)  with  singleended LVCMOS levels, do the following:

- Remove	resistors	R103	and	R114.
- Solder	3k I resistor on R114.
- Solder	5k I resistors on R101 and R92.
- Solder	9k I resistor on R91.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3656 Evaluation Kit

Figure 1. Laser Attachment

<!-- image -->

## Table 1. Adjustment and Control Descriptions

| COMPONENT   | NAME             | FUNCTION                                                                                                                                                                                                                                                                                         |
|-------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JP33        | APCSET SELECT    | This jumper connects a fixed resistance (R82, not installed) or a variable resistance (R120 + R79) between the APCSET pin and GND.                                                                                                                                                               |
| R79         | APCSET RESISTOR  | This 50k I variable resistor, in addition to a 1.5k I series resistor (R120), sets the external resistance between the APCSET pin and GND when a shunt is installed on the VAR side of jumper JP33. Turning the variable resistor clockwise increases the average optical power.                 |
| JP30        | MODSET SELECT    | This jumper connects a fixed resistance (R61, not installed) or a variable resistance (R119 + R59) between the MODSET pin and GND.                                                                                                                                                               |
| R59         | MODSET RESISTOR  | This 50k I variable resistor, in addition to a 3k I series resistor (R119), sets the external resistance between the MODSET pin and GND when a shunt is installed on the VAR side of jumper JP30. Turning the variable resistor clockwise increases the modulation current and extinction ratio. |
| JP32        | BIASMAX SELECT   | This jumper connects a fixed resistance (R118, not installed) or a variable resistance (R88 + R90) between the BIASMAX pin and GND.                                                                                                                                                              |
| R90         | BIASMAX RESISTOR | This 50k I variable resistor, in addition to a 4.3k I series resistor (R88), sets the external resistance between the BIASMAX pin and GND when a shunt is installed on the VAR side of jumper JP32. Turning the variable resistor clockwise increases the maximum bias current.                  |
| JP26        | EN               | This jumper is used to connect the EN pin to VCC (driver disabled) or to GND (driver enabled).                                                                                                                                                                                                   |
| JP28        | LONGB            | This jumper is used to connect the LONGB pin to VCC (burst on-time > 1.2 F s) or to GND (burst on-time ≤ 1.2 F s).                                                                                                                                                                               |
| D2          | FAIL             | The APC loop is functional when the LED is on. The LED is off if the BIASMAX is set too low, the monitor diode (MD) pin is not connected, or the modulation current is set too high.                                                                                                             |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX3656 Evaluation Kit

Figure 2. MAX3656 EV Kit Schematic

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3656 Evaluation Kit

<!-- image -->

Figure 3. MAX3656 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX3656 Evaluation Kit

Figure 4. MAX3656 EV Kit PCB Layout-Component Side

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3656 Evaluation Kit

<!-- image -->

Figure 5. MAX3656 EV Kit PCB Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX3656 Evaluation Kit

Figure 6. MAX3656 EV Kit PCB Layout-Power Plane

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3656 Evaluation Kit

<!-- image -->

Figure 7. MAX3656 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX3656 Evaluation Kit

Figure 8. MAX3656 EV Kit Component Placement Guide-Solder Side

<!-- image -->

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3656 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                               | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 7/03            | Initial release                                                                                                                                                                           | -               |
|                 1 | 10/04           | Corrected the electrical and optical component list, corrected the quick start steps, added text about diodes to OUT- and BIAS-, corrected the schematics and replaced the layout figures | 1 - 4, 7 - 11   |
|                 2 | 8/10            | Redesigned the EV kit to work up to 2.5Gbps                                                                                                                                               | All             |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.