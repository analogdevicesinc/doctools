<!-- lastmod 2022-08-02 -->
## MAX20734 Evaluation Kit

## General Description

The  MAX20734  Evaluation  Kit  (EV  kit)  serves  as  a reference  platform  for  evaluating  the  MAX20734  voltage  regulator  IC.  This  single-chip,  integrated  switching regulator provides an extremely compact, low cost, highly efficient,  fast,  accurate  and  reliable  power  delivery solution for emerging low-output voltage applications up to  40A. Refer to the MAX20734 IC data sheet for more information.

The EV kit comprises a fully-assembled and tested PCB implementation  of  the  MAX20734.  Jumper  pins,  test points, and input/output connectors are included for flex -ibility and ease-of-use in a wide range of applications.

The evaluation board is configured with an edge strip to allow high di/dt loading when evaluating the system. The +VOUT connection is on the top side, while the return (or -V OUT )  is  on  the  bottom side, directly mirroring the top-

- side strip.

Either  solder  directly  to  the  output  strip  or  use  the  J8 terminal block to interface to a load.

## Features

- High Efficiency and Power Density
- Low Component Count
- Small Solution Size
- 509mm 2  Including Inductor and Output Capacitors
- Optimized Performance
- Reduced Design-In Time
- Interfaces to  Maxim PMBus™ Dongle and PowerTool™ GUI
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

PMBus is a trademark of SMIF, Inc.

PowerTool is a trademark of Maxim Integrated Products, Inc.

Evaluates: MAX20734

## Quick Start

## Required Equipment

- MAX20734 EV kit
- 4.5V to 16V power supply
- 0A to 40A load
- Oscilloscope, probes, voltmeter

## Optional Equipment

- MAXPOWERTOOL002# USB-to-PMBus interface dongle
- Maxim PowerTool software

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Verfiy  board operation using these steps:

- 1) Connect  a  powered-off  4.5V  to  16V  input  supply to J1.
- Optionally, connect supply sense leads to V DD1 and GND1 for best accuracy.
- 2) Connect the load to J3 or J8.
- 3) If  Maxim  PowerTool  software  is  used,  connect  the MAXPOWERTOOL002# USB-to-PMBus interface dongle to J704 and to the USB port on the PC.
- 4) Connect  the  V OUT scope  probe/voltmeter  to  J4  or J11, as desired.
- J4 and J11 are connected to the sense point for best accuracy.
- 5) Position the SW1 toggle switch, pointing away from J1 to enable the IC (if desired).
- 6) Turn on the input supply and observe that VOUT = 1V.
- 7) For efficiency measurements, J6 has the appropriate Kelvin sense points.

<!-- image -->

## Operation

The MAX20734 IC is a monolithic, high-frequency stepdown  switching  regulator  optimized  for applications requiring small size, high efficiency, and low output voltages.  Detailed  product  and  application  information  is provided in the MAX20734 IC data sheet.

## Output Enable (OE)

OE  is  used  to  enable/disable  the  output  voltage.  The output voltage is enabled/disabled by SW1. Pointing SW1 in  the  direction  of  the  silkscreened  arrow  enables  the regulator.

## Output-Voltage Selection

The MAX20734 EV kit is set up to initially boot up to an output  volt age  of  1V.  This  has  been  accomplished  by setting the ref  erence to come up to a V BOOT of 0.6484V and  placing  a  voltage-divider  in  the  feedback  path  with a  divide  ratio  of  0.6484.  The  reference  voltage  can  be changed through PMBus, in which case the output volt -age follows the reference voltage divided by the 0.6484 divide ratio. To achieve higher output voltages, a higher divide ratio can be used. Note that the PMBus command -ed and reported V OUT  is actually the voltage at the sense pins, so with the feedback-divider in place, the divide ratio must be taken into account.

R GAIN and  C OUT can  also be changed  to  affect per  formance.  Refer to the MAX20734 IC data sheet for more details.

## Soft-Start and Switching Frequency

These  are  programmable  parameters.  For  the  EV  kit, soft-start is set to 3ms and switching frequency is set to 400kHz.

## Status Monitoring

Whenever the part is actively regulating, and the output volt  age  is  within  the  power-good  window,  the  STAT  pin is  high.  In  all  other  conditions,  including  enabled  but  in a  fault  state,  the  STAT  pin  is  pulled  low.  Refer  to  the MAX20734 IC data sheet for more details.

## Input-Voltage Monitoring

The  V DD1  and  GND1  sense  points  monitor  the  input supply.

## Switching-Voltage Monitoring

The switching waveform can be monitored on VX1.

## Output-Voltage Monitoring

J4-1  and  J4-2  monitor  the  output  voltage  of  V OUT   and GND, respectively. These test points should not be used for  loading. Alternatively,  scopejack  J11  can  be  used  to monitor the output voltage.

## Efficiency Testing

J6 provides convenient access to the appropriate V IN and VOUT sense points.

- VIN\_EFF± are on J6 pins 1 and 2.
- VOUT\_EFF± are on J6 pins 3 and 4.
- Input and output currents should be measured with 0.1% lab shunts.
- For increased accuracy, shunt mismatch can be measured and calibrated out by doing a test running the same current through both shunts.

## Ordering Information

| DEVICE TYPE    | TYPE   |
|----------------|--------|
| MAX20734EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX20734 Evaluation Kit

## MAX20734 Bill of Materials

| Part Reference                              |   Quantity | Description                                |
|---------------------------------------------|------------|--------------------------------------------|
| C1, C74, C75                                |          3 | 100uF, 25V, 20%, TANTALUM                  |
| C24                                         |          1 | 0.01uF, 25V, 10%, X7R                      |
| C3                                          |          1 | 0.1uF, 25V, 10%, X7R                       |
| C32                                         |          1 | 1000pF, 50V, 10%, X7R                      |
| C5, C6, C10, C11                            |          4 | 47uF, 25V, 20%, X5R                        |
| C50                                         |          1 | 22uF, 6.3V, 20%, X6S                       |
| C60, C61                                    |          2 | 1.0uF, 25V, 20%, X5R                       |
| C62, C63, C66, C67, C69, C70, C71, C76, C77 |          9 | 100uf, 6.3V, 20%, X5R                      |
| C7                                          |          1 | 1uF, 25V, 10%, X7R                         |
| C8                                          |          1 | 0.22uF, 16V, 10%, X7R                      |
| C9, C36, C51                                |          3 | 10uF, 6.3V, 20%, X5R                       |
| GND1, GND2, GND3, LOOP, VDD1, VX1           |          6 | 1_PIN-1X1 Straight                         |
| J1, J8                                      |          2 | 2_PIN-2 Pin, Terminal Block w/Screws, Blue |
| J11                                         |          1 | Shielded Scope Probe Jack, Vertical        |
| J3                                          |          1 | 2_Pin-Edge Fingers                         |
| J4                                          |          1 | VOUT-DIF-1X2 Straight                      |
| J6                                          |          1 | 8_PIN-2X4 Straight                         |
| J7                                          |          1 | 6_PIN-2X3 Straight                         |
| J704                                        |          1 | 16_PIN-BoxHeader 2x8                       |
| L1                                          |          1 | 170nH, 10%, Isat= 66A                      |
| R1                                          |          1 | 1.78K Ω , 1%, 1/16W                        |
| R10, R20, R21, R22, R23                     |          5 | 1K Ω , 5%, 1/16W                           |
| R11, R14                                    |          2 | 0 Ω , 5%, 1/16W                            |
| R2                                          |          1 | 162K Ω , 1%, 1/16W                         |
| R4                                          |          1 | 10 Ω , 1%, 1/16W                           |
| R5, R8                                      |          2 | 20K Ω , 5%, 1/16W                          |
| R6                                          |          1 | 1.87K Ω , 1%, 1/16W                        |
| R9                                          |          1 | 3.48K Ω , 1%, 1/16W                        |
| SW1                                         |          1 | DPDT-DPDT, 6pins, 1switch                  |
| U1                                          |          1 | MAX20734                                   |
|                                             |          1 | PCB# 35-900335-01-00                       |

Evaluates: MAX20734

## MAX20734 Schematics

<!-- image -->

│

## MAX20734 Schematics (continued)

<!-- image -->

## MAX20734 Schematics (continued)

<!-- image -->

## MAX20734 PCB Layout

<!-- image -->

Top Silkscreen

<!-- image -->

Bottom Silkscreen

Evaluates: MAX20734

│

## MAX20734 PCB Layout (continued)

Layer 1

<!-- image -->

Layer 2

<!-- image -->

│

## MAX20734 PCB Layout (continued)

Layer 3

<!-- image -->

Layer 4

<!-- image -->

│

## MAX20734 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX20734