<!-- lastmod 2022-08-02 -->
## General Description

The  MAX3643  evaluation  kit  (EV  kit)  is  an  assembled demonstration board that provides optical evaluation of the  MAX3643  155Mbps  to  2.5Gbps  burst-mode  laser driver.  The  evaluation  board  allows  connection  with coaxial laser packages as well as BIDI packages.

## EV Kit Contents

- S MAX3643 EV Kit Board

<!-- image -->

## MAX3643 Evaluation Kit

## Features

- S Fully Assembled and Tested
- S Adjustable Laser Bias Current
- S Adjustable Laser Modulation Current
- S Single +3.3V Power-Supply Operation

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX3643EVKIT+ | EV Kit |

## Component List

| DESIGNATION            |   QTY | DESCRIPTION                                                       |
|------------------------|-------|-------------------------------------------------------------------|
| C1                     |     1 | 1 F F Q 10% ceramic capacitor (0402) Murata GRM155R61A105KE15D    |
| C2                     |     1 | 1000pF Q 10% ceramic capacitor (0402) Murata GRM155R71H102KA01D   |
| C5, C10, C11, C13, C15 |     5 | 0.1 F F Q 10% ceramic capacitors (0402) Murata GRM155R61A104KA01D |
| C7                     |     1 | 0.01 F F Q 10% ceramic capacitor (0603) TDK C1005X8R1E103K        |
| C8                     |     1 | 0.1 F F Q 10% ceramic capacitor (0603) Murata GRM188R71H104KA93D  |
| C14                    |     0 | Not installed, ceramic capacitor (0603)                           |
| C16                    |     1 | 10 F F Q 10% tantalum capacitor (B case) AVX TAJB106K010RNJ       |
| C24                    |     1 | 27pF Q 5% ceramic capacitor (0402) Murata GRM1555C1H270JZ01D      |
| C25, C26               |     2 | 2.2 F F Q 10% ceramic capacitors (0603) Murata GRM188R61C225KE15D |
| C27                    |     0 | Not installed, ceramic capacitor (0402)                           |
| D3, D4                 |     2 | Diodes Panasonic MA27P0100L                                       |

| DESIGNATION                                   |   QTY | DESCRIPTION                                                  |
|-----------------------------------------------|-------|--------------------------------------------------------------|
| D5                                            |     0 | Laser, user supplied                                         |
| J1, J19                                       |     2 | SMB connectors, PC mount vertical Johnson 131-1701-201       |
| J9, J17, TP1, TP2, TP3, TP5, TP15, TP16, TP23 |     9 | Test points Keystone 5000                                    |
| J23-J26                                       |     4 | SMA connectors, edge mount, tab contact Johnson 142-0701-851 |
| JP1                                           |     1 | 2-pin header, 0.1in center Sullins PEC36SAAN                 |
| JP4, JP5, JP6, JP30, JP33                     |     5 | 3-pin headers, 0.1in center Sullins PEC36SAAN                |
| JP1, JP4, JP5, JP6, JP30, JP33                |     6 | Shunts Sullins SSC02SYAN                                     |
| L1                                            |     1 | 10nH Q 5% inductor (0402) Murata LQG15HS10NJ02               |
| R1, R3                                        |     2 | 15 I Q 5% resistors (0402)                                   |
| R2                                            |     1 | 10 I Q 5% resistor (0402)                                    |
| R12, R126                                     |     2 | 5.6 I Q 5% resistors (0402)                                  |
| R17, R42, R50, R53, R58, R61, R72             |     7 | 1.0k I Q 5% resistors (0603)                                 |
| R20, R52                                      |     2 | 50k I variable resistors Bourns 3296W-1-503LF                |
| R43                                           |     1 | 20k I variable resistor Bourns 3296W-1-203LF                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX3643 Evaluation Kit

## Component List (continued)

| DESIGNATION                              |   QTY | DESCRIPTION                     |
|------------------------------------------|-------|---------------------------------|
| R51, R54                                 |     0 | Not installed, resistors (0603) |
| R66                                      |     1 | 3k I Q 5% resistor (0603)       |
| R91, R92, R94, R95, R97, R98, R100, R101 |     0 | Not installed, resistors (0402) |
| R103, R104                               |     2 | 100 I Q 1% resistors (0402)     |
| R113-R116                                |     4 | 0 I Q 5% resistors (0402)       |

## Quick Start

To evaluate the MAX3643 with a laser diode, configure the EV kit as follows:

- 1) Pull  shunts  off  all  jumpers  (JP5,  JP33,  JP30,  JP4, JP6, and JP1).
- 2) Set  RBIASSET  to  10k I by  adjusting  the  BIASSET variable resistor R52 until the measured resistance between  the  VAR  pin  of  jumper  JP5  and  GND is  10k I .  Then  install  a  shunt  on  the  VAR  side  of jumper JP5.
- 3) Connect the VBSET pin to the VREF pin by installing a shunt on the VREF side of jumper JP33.
- 4) Connect the VMSET pin to the VREF pin by installing a shunt on the VREF side of jumper JP30.
- 5) Set  RMODSET  to  5k I by  adjusting  the  MODSET variable resistor R20 until the measured resistance between  the  VAR  pin  of  jumper  JP4  and  GND  is 5k I . Then install a shunt on the VAR side of jumper JP4.
- 6) Set  the  total  RIMAX  to  5k I by  adjusting  the  IMAX variable resistor R43 until the measured resistance between the lower pin of jumper JP1 and GND is 2k I . Then install a shunt on jumper JP1.
- 7) Connect the EN pin to GND by installing a shunt on the GND side of jumper JP6.
- 8) Solder a laser to edge connection D5. See Figure 1 for a view of how the laser should be mounted on the EV kit. Be sure to keep the laser leads as short as possible to minimize parasitic inductance.
- 9) Connect a differential data source to IN+ (J26) and IN-  (J25)  and  a  differential  burst-enable  source  to BEN+ (J24) and BEN- (J23). Make sure the differential signals are between 200mVP-P and 1600mVP-P and the common mode is between (VCC - 1.49V) and (VCC - VIN/4). See the Applications Information section for more options.
- 10)  Attach a +3.3V power supply to J9 (+3.3V) and J17 (GND). Set the current limit to 250mA.
- 11)  Connect the output of the user-supplied laser to an optical-to-electrical converter that has the appropriate bandwidth (filter) for the intended application.
- 12)  Turn on the power supply and adjust the BIASSET (R52) and MODSET (R20) variable resistors for the desired average optical power and extinction ratio. Turning  the  variable  resistors  clockwise  increases bias  and  modulation  current.  In  a  DC-coupled open-loop  configuration,  MODSET  affects  the  P1 power  level  and  BIASSET  affects  the  average power level, i.e., P0 and P1 move together as the resistance  on  BIASSET  is  adjusted.  If  the  laser  is not putting out any power or the driver output shuts down  when  the  bias  or  modulation  currents  are increased,  the  RIMAX  resistance  could  be  set  too high.
- 13)  If the eye diagram contains too much overshoot or the rise/fall times are too slow, experimentally adjust the values of the RL peaking network (R3, L1) and RC shunt network (R121, C24) to better match the characteristics of the laser.

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                             |
|---------------|-------|---------------------------------------------------------|
| R121          |     1 | 75 I Q 5% resistor (0402)                               |
| U1            |     1 | Burst-mode laser driver (24 TQFN-EP*) Maxim MAX3643ETG+ |
| -             |     1 | PCB: MAX3643 EVALUATION BOARD+, Rev C                   |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3643 Evaluation Kit

Figure 1. Laser Attachment

<!-- image -->

## Applications Information

## Continuous Mode Operation

For  continuous  mode  operation,  switch  the  differential burst-enable  input  (BEN Q )  to  a  constant  high  in  one  of two ways:

- Remove	resistor	R103.	Install	a	1k I resistor on R101 and 3k I resistors on R91, R92, and R100.
- Connect	a	+2.3V	supply	to	BEN+	and	a	+1.7V	supply to BEN- (or a differential 0.6V supply between BEN+ and BEN-).

## LVPECL Input Terminations

If needed, an LVPECL Thevenin equivalent load termination  of  50 I to  (VCC  -  2V)  can  be  created  by  doing  the following:

- Remove	resistors	R103	and	R104.
- Solder	130 I resistors on R92, R94, R98, and R101.
- Solder	82 I resistors on R91, R95, R97, and R100.

For  more  information,  refer  to  Application  Note  291: HFAN-01.0: Introduction to LVDS, PECL, and CML.

## LVCMOS Burst Enable

To drive the burst-enable input (BEN+) with single-ended LVCMOS levels, do the following:

- Remove	resistors	R103	and	R114.
- Solder	3k I resistor on R114.
- Solder	5k I resistors on R101 and R92.
- Solder	9k I resistor on R91.

## Measuring MDOUT

The voltage at MDOUT is internally forced to 1.2V during the burst-on period. When the laser driver transitions to a burst-off period, the voltage at MDIN is sampled and then mirrored at MDOUT during the burst-off period. If the monitor diode has a high bandwidth, the MDIN voltage falls significantly while being sampled, resulting in a  lower/inaccurate  voltage  at  MDOUT.  To  compensate for this, solder a capacitor to C27. Start with 22pF and verify  whether  the  voltage  on  MDIN  reaches  &gt;  90%  of steady state during the minimum burst-on period (use a high-impedance probe on MDIN). Maximizing the value of C27 while still making sure that the proper voltage during burst-on is reached at MDIN minimizes the amount of voltage error that occurs on MDOUT.

There  is  also  a  certain  amount  of  voltage  shifting  that occurs burst-to-burst on MDOUT. The voltage shift is due to differences in data mark density during the burst-on period (see Figure 2). The fewer the number of bits in the burst-on period, the larger the voltage shifts at MDOUT. Therefore, it is necessary to filter or average the MDOUT voltage to reduce the shifting effects.

Note: The resistance at MDIN (RMDIN, R72) may need to be adjusted to obtain approximately 1.2V at MDIN during the  burst-on  time  period.  Setting  the  operating  voltage at MDIN to 1.2V maximizes the margins for this pin and MDOUT. RMDIN can be computed by dividing 1.2V by the expected monitor diode current at the nominal average operating laser power. Setting the operating point at 1.2V causes any droop up or down of MDOUT to be minimized.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX3643 Evaluation Kit

Figure 2. Relationship Between MDIN and MDOUT Voltage

<!-- image -->

## Controlling IBIAS and IMOD from External Voltages

The bias and modulation current can be controlled from external  sources  by  applying  control  voltages  at  TP23 (for  controlling  bias  current)  and  TP15  (for  controlling modulation  current).  Jumpers  JP33  and  JP30  must  be set properly when driving TP23 and TP15 (see Table 1).

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

When setting  the  bias  and  modulations  currents  using VMSET and VBSET, the following equations can be used to determine the driver output currents:

<!-- formula-not-decoded -->

Note: The  50 I resistances  in  these  equations  are  the internal resistances on the BIASSET and MODSET pins. The usable voltage range on VBSET and VMSET is 5mV to 1.4V.

## Table 1. Adjustment and Control Descriptions

| COMPONENT   | NAME           | FUNCTION                                                                                                                           |
|-------------|----------------|------------------------------------------------------------------------------------------------------------------------------------|
| J1          | BENOUT         | The BENOUT voltage can be monitored by a high-impedance oscilloscope at this SMB connector.                                        |
| J19         | MDOUT          | The MDOUT voltage can be monitored by a high-impedance oscilloscope at this SMB connector.                                         |
| JP1         | IMAX JUMPER    | This jumper opens the connection to IMAX for measuring the IMAX variable resistor (R43).                                           |
| JP4         | MODSET SELECT  | This jumper connects a fixed resistance (R51, not installed) or a variable resistance (R50 + R20) between the MODSET pin and GND.  |
| JP5         | BIASSET SELECT | This jumper connects a fixed resistance (R54, not installed) or a variable resistance (R53 + R52) between the BIASSET pin and GND. |
| JP6         | EN             | This jumper connects the EN pin to VCC (driver disabled) or GND (driver enabled).                                                  |
| JP30        | VMSET SELECT   | This jumper connects the VMSET pin to the VREF pin or to test point TP15 for external control.                                     |

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3643 Evaluation Kit

Table 1. Adjustment and Control Descriptions (continued)

| COMPONENT   | NAME             | FUNCTION                                                                                                                                                                                                                                                                  |
|-------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JP33        | VBSET SELECT     | This jumper connects the VBSET pin to the VREF pin or to test point TP23 for external control.                                                                                                                                                                            |
| R20         | MODSET RESISTOR  | This 50k I variable resistor, in addition to a 1k I series resistor (R50), sets the external resistance between the MODSET pin and GND when a shunt is installed on the VAR side of jumper JP4. Turning the variable resistor clockwise increases the modulation current. |
| R43         | IMAX RESISTOR    | This 20k I variable resistor, in addition to a 3k I series resistor (R66), sets the resistance between the IMAX pin and GND. Turning the variable resistor clockwise increases the laser current limit.                                                                   |
| R52         | BIASSET RESISTOR | This 50k I variable resistor, in addition to a 1k I series resistor (R53), sets the external resistance between the BIASSET pin and GND when a shunt is installed on the VAR side of jumper JP5. Turning the variable resistor clockwise increases the bias current.      |
| TP1         | VREF             | Monitoring point for the voltage at VREF.                                                                                                                                                                                                                                 |
| TP5         | BCMON            | Monitoring point for the voltage at BCMON.                                                                                                                                                                                                                                |
| TP15        | VMSET            | Connection point for driving the VMSET pin. To use this test point a shunt must be installed on the V_TP15 side of jumper JP30.                                                                                                                                           |
| TP16        | MDIN             | Monitoring point for the voltage at MDIN.                                                                                                                                                                                                                                 |
| TP23        | VBSET            | Connection point for driving the VBSET pin. To use this test point a shunt must be installed on the V_TP23 side of jumper JP33.                                                                                                                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX3643 Evaluation Kit

Figure 3. MAX3643 EV Kit Schematic

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3643 Evaluation Kit

Figure 4. MAX3643 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX3643 Evaluation Kit

Figure 5. MAX3643 EV Kit PCB Layout-Component Side

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3643 Evaluation Kit

Figure 6. MAX3643 EV Kit PCB Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX3643 Evaluation Kit

Figure 7. MAX3643 EV Kit PCB Layout-Power Plane

<!-- image -->

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3643 Evaluation Kit

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    11

## MAX3643 Evaluation Kit

Figure 9. MAX3643 EV Kit Component Placement Guide-Solder Side

<!-- image -->

12      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3643 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                 | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------|-----------------|
|                 0 | 11/05           | Initial release                             | -               |
|                 1 | 8/10            | Redesigned the EV kit to work up to 2.5Gbps | All             |