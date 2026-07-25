<!-- lastmod 2022-08-03 -->
## MAX16136 Evaluation Kit

## General Description

The  MAX16136  evaluation  kit  (EV  kit)  is  fully  tested and  assembled  circuit  that  demonstrates  the  capabilities of  the  MAX16136,  a  high-precision  reset  IC  offering window-threshold and window-watchdog monitoring. The MAX16136 EV kit is designed to facilitate the evaluation of various features of the MAX16136 such as input overvoltage/ undervoltage faults, window-watchdog violation, and OV latching/unlatching  capability.  The  MAX16136  EV  kit operates over the automotive temperature range.

The reset signal at RST asserts low when the voltage at IN falls outside of the overvoltage/undervoltage windowthreshold  settings. An  overvoltage  signal  at OV latches low to indicate overvoltage condition at IN and a watchdog output signal at WDO pulses low when the signal period at  WDI  falls  outside  of  the  window-watchdog  timing. The EV kit also features a push-button switch at CLR to unlatch the overvoltage fault output ( OV ). Two indicators, OV\_STATUS LED and UV\_STATUS LED, provide visual fault status at the input for overvoltage and undervoltage conditions.

## Features

- 3.3V Nominal Input Threshold Voltage
- ±4% Undervoltage/Overvoltage Thresholds with Respect to Nominal Input Threshold
- 8ms(t WD\_F )/80ms (t WD\_S ) Window-Watchdog Timeout
- 10ms Reset Timeout for RST signal
- Reset LED Indicator
- Overvoltage Fault LED Indicator
- Clear Fault Input Push-Button Switch
- -40°C to +125°C Operating Temperature Range
- Proven 2-Layer 2oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX16136

## Quick Start

## Required Equipment

- MAX16136 EV kit
- DC power supplies: 3.5V/50mA and 5V/100mA
- One digital multimeter (DMM)
- Function generator
- Two-channel oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Connect the positive terminal of the 5V/100mA power supply to VDC test point. Connect the ground terminal of the power supply to GND post.
- 2) Connect the positive terminal of the 3.5V/50mA power supply IN test point. Connect the ground terminal of the power supply to GND post.
- 3) Connect the positive terminal of the DMM to IN test post and the negative terminal of the DMM to GND.
- 4) Connect oscilloscope channel 1 to WDI test point and channel 2 to WDO test point
- 5) Connect the function generator between WDI and GND terminal posts.

## MAX16136 EV Kit Files

| FILE                   | DECRIPTION              |
|------------------------|-------------------------|
| MAX16136 EV BOM        | EV Kit Bill of Material |
| MAX16136 EV PCB Layout | EV Kit Layout           |
| MAX16136 EV Schematic  | EV Kit Schematic        |

<!-- image -->

## MAX16136 Evaluation Kit

- 6) Turn on the 5V/100mA power supply and slowly increase its output voltage to 5V.
- 7) Turn on the 3.5V/50mA power supply and slow increase its output voltage to 3.3V.
- 8) Verify the reading on DMM is 3.3V and both signals and both LEDs are turned off.
- 9) Turn on the function generator and configure the output to generate a pulse period between 8ms and 80ms.
- 10)  Verify on the oscilloscope the WDI signal and that WDO pulled high and not pulsing.
- 11)  EV kit is ready for further testing.

## Detailed Description of Hardware

The  MAX16136  EV  kit  is  fully  tested  and  assembled circuit  that  operate  from  1.7V  to  5.5V  input  supply range. The EV kit is designed to monitor a 3.3V system supply within ±4% window threshold for undervoltage and overvoltage faults.

The MAX16136 EV kit includes two LEDs, OV\_STATUS and  UV\_STATUS,  to  indicate  the  undervoltage  and overvotlage  faults  at  the  input  (IN).  OV\_STATUS  turns red when the input voltage goes above the overvoltage threshold  indicating  an  overvoltage  fault.  OV\_STATUS LED  remains  on  even  if  the  voltage  at  the  input  goes below the overvotlage threshold. To turn off OV\_STATUS LED, pull CLR to ground (refer to the device data sheet's electrical characteristics table for proper pulse-width duration on CLR ). UV\_STATUS  indicates the state of reset output of the MAX16136. UV\_STATUS turns blue when the input voltage goes either below the undervoltage threshold or above  the  overvoltage  threshold  and  turns  off  after  the reset timeout period once the input voltage is within the input's  window-threshold.  To  connect OV or RST to  a voltage other than V DD , remove R1 and connect external voltage at V PULLUP .

## Undervoltage/Overvoltage Functionality

- Slowly lower the 3.3V DC level at IN to about 3.168V (typ) and verify the UV\_STATUS LED is turned on, indicating undervoltage fault. Bring the DC voltage at IN back to 3.3V while monitoring that UV\_STATUS LED is turned off.
- Slowly increase the 3.3V DC level at IN to about 3.432V (typ). Verify that the OV\_STATUS LED and UV\_STATUS LEDs are both turned on due to an overvoltage fault. Bring the DC level at IN back to 3.3V and verify that the UV\_STATUS LED is turned off while OV\_STATUS LED stays on, indicating latched output at OV .

## Evaluates: MAX16136

- Press the push-button at CLR to unlatch overvoltage at OV and turn the OV\_STATUS LED off.

Note: See below calculation to accommodate IN accuracy and hysteresis for undervoltage and overvoltage thresholds.

## Window-Watchdog Functionality

While monitoring both WDI and WDO on the scope slowly increase the frequency of the signal at WDI such that the period between two falling edges of the signal is shorter than  8ms.  Verify  the  pulse  duration  at WDO is  50ms indicating fast watchdog timeout period violation. Slowly decrease the frequency of the signal at WDI such that the period  between  two  falling  edges  is  longer  than  80ms. Verify the pulse duration at WDO is 100ms indicating slow watchdog timeout period violation.

## Overvoltage Latch

The open-drain output, OV latches low when the IN voltage exceeds the overvoltage threshold, the OV signal is latched to low, to clear the latch first make sure the input voltage is below the overvoltage threshold and then pull CLR low using the pushbutton switch.

## Status LED

The  MAX16136  EV  kit  features  two  status  LED  for RST and OV signal.  1KΩ  pullup  is  connected  to  the LEDs to limit the sink current into the RST and OV pin. When IN voltage fall outside of nominal window voltage UV\_STATUS LED will turn on showing the status of RST pin.  OV\_STATUS LED is used to indicate  the  status  of OV pin, if IN voltage  is more than overvoltage threshold OV\_STATUS LED is turn on and latched to this state even IN voltage come back to its nominal voltage range. CLR pushbutton must be pressed to turn off the OV\_STATUS LED.

## PULLUP Voltage

The  MAX16136  EV  kit  provides  the  option  to  connect different  voltage  rail  for RST , OV , WDO pullup  resistor. Remove the 0Ω resistor (R1) from the EV kit and connect the desired pullup voltage to V PULLUP .

## Setting Input Thresholds

The  MAX16136  monitors  a  system  supply  voltage  for undervoltage/overvoltage  window-threshold.  Depending on the system supply tolerance requirement, the undervoltage/ overvoltage thresholds can be factory-trimmed from ±4% to ±11%. The tolerance setting is symmetrical with respect to  the  selected nominal input threshold voltage.  Below  is  a detailed calculation of how to determine the undervoltage/ overvoltage threshold levels with ±1% threshold accuracy for 3.3V ±4% supply voltage.

<!-- formula-not-decoded -->

Where VINNOM is  the  selected  nominal  input  threshold voltage, T OL  is the input tolerance, V UVTH  is undervoltage threshold voltage and V OVTH  is the overvoltage threshold voltage.

The  MAX16136  monitors  the  supply  voltage  with  ±1% accuracy  over  the  operating  temperature  and  supply range.  The  accuracy  range  for  the  3.3V  ±5%  is  shown below:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Where  V UVTH\_A   is  the  undervoltage  threshold  accuracy range and V OVTH\_A  is the overvoltage threshold accuracy.

The  MAX16136  also  features  input  hysteresis  that  is factory  programmable  to  either  0.25%  or  0.50%.  The hysteresis is calculated with respect to the nominal input voltage.  For  the  3.3V  nominal  input  voltage  and  0.25% hysteresis we have the following:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

If  the  reset  is  due  to  an  overvoltage  event  at  the  input, 8.25mV must be subtracted from the voltage point where the reset was triggered, as shown in Figure 1, where 8.25mV must be added in case of an undervoltage  event, to bring the device out of reset at the end of reset timeout period.

│

## Evaluates: MAX16136

Figure 1: Graphical Description of Overvoltage Threshold

<!-- image -->

## Component Suppliers

| SUPPLIER          | WEBSITE                         |
|-------------------|---------------------------------|
| Lite ON           | www.liteon.com                  |
| WURTH ELECTRONICS | www.we-online.com               |
| Panasonic         | www.na.industrial.panasonic.com |

Note: Indicate that you are using the MAX16136 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16136EVKIT# | EV Kit |

#Denotes RoHS

## MAX16136 EV Kit Bill of Materials

| ITEM   | REF_DES                                                  |     |   QTY | MFG PART #                                                                                                                                                      | MANUFACTURER                                         | VALUE          | DESCRIPTION                                                                                                                                                                                            |
|--------|----------------------------------------------------------|-----|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | C1, C2                                                   |     |     2 | 885012206071;CGJ3E2X7R1E104K080AA; C1608X7R1E104K080AA;C0603C104K3RAC; GRM188R71E104KA01;C1608X7R1E104K; 06033C104KAT2A;CGA3E2X7R1E104K080AA; GCJ188R71E104KA12 | WURTH ELECTRONICS INC; TDK;TDK;KEMET;AVX;TDK; MURATA | 0.1UF          | CAPACITOR; SMT; 0603; CERAMIC; 0.1uF; 25V;10%; X7R; -55degC to + 125degC; +/-15% from -55degC to +125degC                                                                                              |
| 2      | CLR, GND, GND1-GND3, IN, OV, RST, VDD, V_PULLUP, WDI,WDO |     |    12 | 9020 BUSS                                                                                                                                                       | WEICO WIRE                                           | MAXIMPAD       | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                                               |
| 3      | CLR_SW                                                   |     |     1 | EVQ-Q2K03W                                                                                                                                                      | PANASONIC                                            | EVQ-Q2K03W     | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC                                                                                                             |
| 4      | MH1-MH4                                                  |     |     4 | 9032 KEYSTONE                                                                                                                                                   | 9032 KEYSTONE                                        | 9032           | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                                              |
| 5      | OV_STATUS                                                |     |     1 | LTST-C190CKT                                                                                                                                                    | LITE-ON ELECTRONICS INC.                             | LTST-C190CKT   | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC JUMPER;                                                                                                                |
| 6      | R1                                                       |     |     1 | CRCW06030000Z0                                                                                                                                                  | VISHAY DALE                                          |                | 0 RESISTOR; 0603; 0 OHM; 0%; 0.1W; THICK FILM                                                                                                                                                          |
| 7      | R2, R3                                                   |     |     2 | CRCW06031K00FK;ERJ-3EKF1001                                                                                                                                     | VISHAY DALE;PANASONIC                                | 1K             | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                      |
| 8      | R4, R6, R7                                               |     |     3 | CRCW060310K0FK;ERJ-3EKF1002                                                                                                                                     | VISHAY DALE;PANASONIC                                | 10K            | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                     |
| 9      | RST_STATUS                                               |     |     1 | LTST-C191TBKT                                                                                                                                                   | LITE-ON ELECTRONICS INC                              | LTST-C191TBKT  | DIODE; LED; ; SMT (0603); PIV=5V; IF=0.02A; BLUE                                                                                                                                                       |
| 10     | U1                                                       |     |     1 | MAX1613600/VY+                                                                                                                                                  | MAXIM                                                | MAX1613600/VY+ | EVKIT PART - IC; MAX1613600/VY+T; CS04; HIGH-PRECISION SUPERVISORY WITH WINDOW WATCHDOG AND OVERVOLTAGE INDICATOR; PACKAGE OUTLINE: 21-100185; PACKAGE LAND PATTERN: 90-100070; PACKAGE CODE: T822Y+3C |
| 11     | PCB                                                      |     |     1 | MAX16136                                                                                                                                                        | MAXIM                                                | PCB            | PCB:MAX16136                                                                                                                                                                                           |
| 12     | R5                                                       | DNP |     0 | N/A                                                                                                                                                             | N/A                                                  | OPEN           | PACKAGE OUTLINE 0603 RESISTOR                                                                                                                                                                          |
| TOTAL  |                                                          |     |    29 |                                                                                                                                                                 |                                                      |                |                                                                                                                                                                                                        |

Evaluates: MAX16136

## MAX16136 EV Kit Schematic

<!-- image -->

│

## MAX16136 EV Kit PCB Layout Diagrams

MAX16136 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX16136 EV Kit PCB Layout-Top

<!-- image -->

MAX16136 EV Kit PCB Layout-Bottom

<!-- image -->

MAX16136 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX16136 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/19           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,ntegrated reserves the right to change the circuitr\ and specifications Zithout notice at an\ time.

│

Evaluates: MAX16136