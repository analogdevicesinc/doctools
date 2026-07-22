<!-- lastmod 2022-08-02 -->
## MAX20710 Evaluation Kit

## General Description

The  MAX20710  Evaluation  Kit  (EV  kit)  serves  as  a reference platform for evaluating the MAX20710 voltage-regulator IC. This single-chip, integrated switching regulator provides an extremely compact, low-cost, highly efficient, fast, accurate, and  reliable  power-delivery solution for emerging low-output voltage applications up to  10A. Refer to the MAX20710 IC data sheet for more information.

The EV kit comprises a fully-assembled and tested PCB implementation  of  the  MAX20710.  Jumper  pins,  test points, and input/output connectors are included for flex -ibility and ease-of-use in a wide range of applications.

The  evaluation board is configured with an  edge strip  to  allow  high  di/dt  loading  when  evaluating  the system.  The  +VOUT  connection  is  on  the  top  side, while  the  return  (or  -VOUT)  is  on  the  bottom  side, directly  mirroring  the  top-side  strip.  Either  solder  the load  devices  directly  to  the  output  strip  or  use  the  J8 terminal block to interface to a load.

## Features

- High Efficiency and Power Density
- Low Component Count
- Small Solution Size · 509mm 2  Including Inductor and Output Capacitors
- Optimized Performance
- Reduced Design-In Time
- Interfaces to  Maxim PMBus™ Dongle and PowerTool™ GUI
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

PMBus is a trademark of SMIF, Inc.

PowerTool is a trademark of Maxim Integrated Products, Inc.

Evaluates: MAX20710

## Quick Start

## Required Equipment

- MAX20710EVKIT# EV kit
- 4.5V to 16V power supply
- 0A to 10A load
- Oscilloscope, probes, and voltmeter

## Optional Equipment

- MAXPOWERTOOL002# USB-to-PMBus interface dongle
- Maxim PowerTool software

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Verfiy  board operation using these steps:

- 1) Connect  a  powered-off  4.5V  to  16V  input  supply to J1.
- Optionally, connect supply sense leads to VDD1 and GND1 for best accuracy.
- 2) Connect the load to J3 or J8.
- 3) If  Maxim  PowerTool  software  is  used,  connect  the MAXPOWERTOOL002# USB-to-PMBus interface dongle to J704 and to the USB port on the PC.
- 4) Connect  the  VOUT  scope  probe/voltmeter  to  J4  or J11, as desired.
- 5) J4  and  J11  are  connected  to  the  sense  point  for best accuracy.
- Position the SW1 toggle switch, pointing away from J1 to enable the IC (if desired).
- 6) Turn on the input supply and observe that VOUT = 1V.
- 7) For efficiency measurements, J6 has the appropriate Kelvin sense points.

<!-- image -->

## Operation

## Output Enable (OE)

OE  is  used  to  enable/disable  the  output  voltage.  The output voltage is enabled/disabled by SW1. Pointing SW1 in  the  direction  of  the  silkscreened  arrow  enables  the regulator.

## Output-Voltage Selection

The MAX20710 EV kit is set up to initially boot up to an output  volt age  of  1V.  This  has  been  accomplished  by setting  the  ref  erence  to  come  up  to  a  V BOOT of  0.65V and placing a voltage-divider in the feedback path with a divide ratio of 0.65. The reference voltage can be changed through PMBus, in which case the output voltage follows the reference voltage divided by the 0.65 divide ratio. To achieve higher output voltages, a higher divide ratio can be used. Note that the PMBus can command and report (write/read)  VOUT  as  the  voltage  at  the  sense  pins,  so with  the  feedback-divider  in  place,  the  divide  ratio  must be taken into account.

R GAIN of  the  IC  and  output  capacitance  of  the  EV  kit can also be changed to affect per  formance.  Refer to the MAX20710 IC data sheet for more details.

## Soft-Start and Switching Frequency

These  are  programmable  parameters.  For  the  EV  kit, soft-start is set to 3ms and switching frequency is set to 400kHz.

## Monitoring

- Status Monitoring: Whenever the part is actively regulating, and the output volt  age is within the power-good window, the STAT pin is high. In all other conditions, including enabled but in a fault state, the STAT pin is pulled low. Refer to the MAX20710 IC data sheet for more details.
- Input-Voltage Monitoring: The VDD1 and GND1 sense points monitor the input  supply.
- Switching-Voltage Monitoring: The switching waveform can be monitored on VX1.
- Output-Voltage Monitoring: J4-1 and J4-2 monitor the output voltage of VOUT and GND, re spectively. These test points should not be used for loading. Alternatively, scope jack J11 can be used to monitor the output voltage.

## Efficiency Testing

J6 provides convenient access to the appropriate VIN and VOUT sense points.

- VIN\_EFF± are on J6 pins 1-2.
- VOUT\_EFF± are on J6 pins 3-4.
- Input and output currents should be measured with 0.1% lab shunts.
- For increased accuracy, shunt mismatch can be mea  sured and calibrated out by doing a test running the same current through both shunts.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20710EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX20710 EV Bill of Materials

TITLE: Bill of Materials DATE: 02/06/2018 DESIGN:

NOTE: DNI--&gt; DO NOT INSTALL(PACKOUT) ; DNP--&gt; DO NOT PROCURE

| ITEM                           | REF_DES        | QTY              | MFG PART #          | MANUFACTURER     | VALUE   | DESCRIPTION                                   |
|--------------------------------|----------------|------------------|---------------------|------------------|---------|-----------------------------------------------|
|                                | 1 C1, C74, C75 | 3                | T521X107M025ATE060  | Kemet            | 100uF   | CAPACITOR; 7343(D); 100uF, 25V, 20%, TANTALUM |
| 2 C23                          | 1              |                  | GRM155R71H221KA01D  | Murata           | 220pF   | CAPACITOR; 0402; 220pF, 50V, 10%, X7R         |
| 3 C24                          |                | 1                | C1005X7R1E103K      | TDK              | 0.01uF  | CAPACITOR; 0402; 0.01uF, 25V, 10%, X7R        |
| 4 C3                           |                | 1                | C1005X7R1E104K050BB | TDK              | 0.1uF   | CAPACITOR; 0402; 0.1uF, 25V, 10%, X7R         |
| 5 C32                          |                | 1                | 04022R102K9B20D     | Phycomp          | 1000pF  | CAPACITOR; 0402; 1000pF, 50V, 10%, X7R        |
| 6 C38                          |                | 1                | C0402C103K5RAC      | Kemet            | 0.01uF  | CAPACITOR; 0402; 0.01uF, 50V, 10%, X7R        |
| 7 C5, C6                       | 2              |                  | C3216X5R1E476M      | TDK              | 47uF    | CAPACITOR; 1206; 47uF, 25V, 20%, X5R          |
| 8 C60, C61                     |                | 2                | TMK105BJ105MV-F     | Taiyo Yuden      | 1.0uF   | CAPACITOR; 0402; 1.0uF, 25V, 20%, X5R         |
| 9 C62, C63, C66, C67, C70, C77 | 6              |                  | C3216X5R0J107M160AB | TDK              | 100uF   | CAPACITOR; 1206; 100uF, 6.3V, 20%, X5R        |
| 10 C7                          | 1              |                  | GRM188R71E105KA12D  | Murata           | 1uF     | CAPACITOR; 0603; 1uF, 25V, 10%, X7R           |
| 11 C8                          | 1              |                  | GRM155R71C224KA12D  | Murata           | 0.22uF  | CAPACITOR; 0402; 0.22uF, 16V, 10%, X7R        |
| 12 C9, C36, C51                | 3              |                  | C1005X5R0J106M050BC | TDK              | 10uF    | CAPACITOR; 0402; 10uF, 6.3V, 20%, X5R         |
| 13 GND1, GND2, GND3, LOOP,     | VDD1, VX1      | 6                | TSW-101-07-L-S      | Samtec           |         | 1_PIN-1X1 Straight                            |
| 14 J1, J8                      |                | 2                | ED120/2DS           | On Shore         |         | 2_PIN-2 Pin, Terminal Block w/Screws, Blue    |
| 15 J11                         | 1              |                  | 129-0701-202        | Johnson          |         | Shielded Scope Probe Jack, Vertical           |
| 17 J4                          | 1              |                  | TSW-101-07-L-D      | Samtec           |         | VOUT-DIF-1X2 Straight                         |
| 18 J6                          | 1              |                  | 87215-1             | AMP              |         | 8_PIN-2X4 Straight                            |
| 19 J7                          | 1              | TSW-103-07-L-D   |                     | Samtec           |         | 6_PIN-2X3 Straight                            |
| 20 J704                        | 1              | AWHW16G-0202-T-R |                     | Assman           |         | 16_PIN-BoxHeader 2x8                          |
| 21 L1                          | 1              |                  | FP1007R6-R33-R      | Coiltronics      | 330nH   | INDUCTOR; 330nH, 10%, Isat= 33A               |
| 22 R1                          | 1              |                  | ERJ-2RKF1781X       | Panasonic        | 1.78KΩ  | RESISTOR; 0402; 1.78KΩ, 1%, 1/16W             |
| 23 R10, R20, R21, R22, R23     | 5              |                  | ERJ-2GEJ102X        | Panasonic        | 1KΩ     | RESISTOR; 0402; 1KΩ, 5%, 1/16W                |
| 24 R11, R14                    |                | 2                | ERJ-2GE0R00X        | Panasonic        | 0Ω      | RESISTOR; 0402; 0Ω, 5%, 1/16W                 |
| 25 R13                         | 1              |                  | ERJ-2RKF1001X       | Panasonic        | 1KΩ     | RESISTOR; 0402; 1KΩ, 1%, 1/16W                |
| 26 R2                          | 1              |                  | ERJ-2RKF1623X       | Panasonic        | 162KΩ   | RESISTOR; 0402; 162KΩ, 1%, 1/16W              |
| 27 R4                          | 1              |                  | ERJ-2RKF10R0X       | Panasonic        | 10Ω     | RESISTOR; 0402; 10Ω, 1%, 1/16W                |
| 28 R5, R8                      | 2              |                  | ERJ-2GEJ203X        | Panasonic        | 20KΩ    | RESISTOR; 0402; 20KΩ, 5%, 1/16W               |
| 29 R6                          | 1              |                  | ERJ-2RKF1871X       | Panasonic        | 1.87KΩ  | RESISTOR; 0402; 1.87KΩ, 1%, 1/16W             |
| 30 R9                          | 1              | ERJ-2RKF3481X    |                     | Panasonic        | 3.48KΩ  | RESISTOR; 0402; 3.48KΩ, 1%, 1/16W             |
| 31 SW1                         |                |                  | GT21MCKE            | C&K              |         | DPDT-DPDT, 6pins, 1switch                     |
| 32 U1                          | 1 1            | MAX20710EPL+     |                     | Maxim Integrated |         | MAX20710-Maxim POL                            |
| TOTAL                          |                | 54               |                     |                  |         |                                               |

## MAX20710 EV Schematics

<!-- image -->

D

C

B

A

│

## MAX20710 EV Schematics (continued)

<!-- image -->

│

## MAX20710 EV Schematics (continued)

<!-- image -->

## MAX20710 EV PCB Layout

Top Silkscreen

<!-- image -->

Bottom Silkscreen

<!-- image -->

│

## MAX20710 EV PCB Layout (continued)

Layer 1

<!-- image -->

Layer 2

<!-- image -->

│

## MAX20710 EV PCB Layout (continued)

Layer 4

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX20710