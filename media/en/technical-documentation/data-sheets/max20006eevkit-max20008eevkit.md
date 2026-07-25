<!-- lastmod 2022-08-04 -->
## MAX20006E/MAX20008E Evaluation Kit

## General Description

The  MAX20006E/MAX20008E  evaluation  kits  (EV  kits) demonstrate the MAX20006E/MAX20008E high-voltage, current-mode,  synchronous  step-down  converters  with low  operating  current. The  EV  kits  operate  over  a  wide 3.5V-to-36V input range. The output is set for 5V in the default  configuration,  but  can  be  adjusted  between  1V and 5V with appropriate components. The MAX20006E/ MAX20008E current limit supports a nominal output current of 6A or 8A, respectively.

The  EV  kit  switching  frequency  is  set  for  2.1MHz (MAX20006EEVKIT#)  or  400kHz  (MAX20008EEVKIT#) in  the  default  configuration.  The  switching  frequency  is fixed  internally  and  can  be  synchronized  to  an  external signal within the specified range. The EV kits can be set for fixed-frequency (PWM mode) or pulse-skipping (SKIP mode) for light  load  efficiency  through  the  provided  onboard jumper.

## Benefits and Features

- 3.5V to 36V Input Supply Range
- 15µA No-Load Quiescent Current in Skip Mode
- High-Efficiency Synchronous DC-DC Converter with Integrated FETs
- External Frequency Synchronization (SYNC) Input
- Internal Soft-Start
- Fixed 3.3V/5.0V/3.9V Output or Resistor Programmable 1V to 5V Output
- Low Dropout (98% Effective Duty Cycle Operation)
- ±2% Output Voltage Accuracy
- RESET Output
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Evaluate: MAX20004E/MAX20006E/ MAX20008E

## Quick Start

## Required Equipment

- MAX20006E/MAX20008E EV kit
- 14V, 4A DC power supply
- Electronic load capable of 8A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Connect the 14V power supply between the V IN  and nearest GND input terminals on the EV kit.
- 3) Connect the electronic load between the V OUT and nearest GND output terminals on the EV kit and set for 6A (MAX20006EEVKIT#) or 8A (MAX20008EEVKIT#).
- 4) Connect the DVM between the V OUT  and nearest GND output terminals on the EV kit.
- 5) Set the power supply to 14V and 4A current limit. Turn on the power supply.
- 6) The voltmeter should display an output voltage of 5V ±2%.
- 7) Turn on the electronic load and verify that the output voltage is 5V.

## Table 1. Default Jumper Settings

| JUMPER    | SHUNT POSITION   | FUNCTION                                               |
|-----------|------------------|--------------------------------------------------------|
| JU1, EN   | Middle-ON        | Buck controller enabled                                |
| JU3, SS   | Middle-OFF       | Spread spectrum disabled                               |
| JU2, SYNC | Middle-PWM       | PGOOD is pulled up by V BIAS when OUT is in regulation |

<!-- image -->

## MAX20006E/MAX20008E Evaluation Kit

## Detailed Description

The MAX20006E/MAX20008E EV kits come fully assembled and tested. The MAX20006EVKIT# is populated with the MAX20006EAFOA/VY+, and the MAX20008EEVKIT# is populated with the MAX20008EAFOD/VY+. Other converters in the family can be tested on the same EV kit, but changing the IC or the output voltage may also require changing  other  components.  Consult  the  IC  data  sheet for  guidance  on  selecting  the  proper  ICs  and  external components.

## Switching Frequency/External Synchronization

The IC can operate in either forced-PWM mode or in SKIP mode. Place a shunt in the middle-FPWM position on JU2 to select forced-PWM mode at the internally-programmed frequency.  Removing  the  shunt  from  JU2  or  placing  a shunt in the middle-skip position on jumper JU2 causes the  IC  to  enter  SKIP  mode  for  maximum  light  load  efficiency. With a shunt in the middle-skip position on jumper

## Table 2. Component List

## Parts Common to All Variants

| PART                               | QTY   | DESCRIPTION                                  | MANUFACTURER    | PART#                |
|------------------------------------|-------|----------------------------------------------|-----------------|----------------------|
| GND, V IN , VOUT, GND              | 4     | BANANAJACK UNINSULATED THREADED EXTERNAL NUT | POMONA          | 3267                 |
| GND, V IN , SYNC, RESET, VOUT, GND | 6     | WIRE LOOP                                    |                 |                      |
| C1, C2, C6, C7, C12, C13, C14, C16 | 8     | CAP CER 0.1µF 100V X7R 0603                  | MURATA          | GRJ188R72A104KE11D   |
| C3, C4                             | 2     | CAP CER 4.7µF 35V X7R 0805                   | TDK             | CGA4J1X7R1V475K125AC |
| C5                                 | 1     | CAPALUM 330µF 20% 35V SMD                    | PANASONIC       | EEE-FK1V331P         |
| C15                                | 1     | CAP CER 2.2µF 10V X7R 0603                   | TDK             | C1608X7R1A225K080AC  |
| C17                                | NP    |                                              |                 |                      |
| C18, C19                           | NP    | 10000pF FT CAP 50V 1A 0603                   | TDK             | YFF18AC1H103MT0Y0N   |
| FB1                                | 1     | FERRITE CHIP 60Ω 6A 1806                     | MURATA          | BLM41PG600SH1L       |
| JU1, JU2, JU3                      | 3     | 3-PIN HEADER 0.100' 40POS CUT TO FIT         | TE CONNECTIVITY | 4-103327-0           |
| L2                                 | 1     | INDUCTOR 1µH SMD                             | TDK             | SPM5030T-1R0M-HZ     |
| R1, R2, R3, R8                     | NP    |                                              |                 |                      |
| R4, R6, R7                         | 2     | RES SMD 100KΩ 1% 1/10W 0603                  | PANASONIC       | ERJ-3EKF1003V        |
| R5                                 | 2     | RES SMD 0Ω JUMPER 1/10W 0603                 | PANASONIC       | ERJ-3GEY0R00V        |

│

## Evaluate: MAX20004E/MAX20006E/ MAX20008E

JU2, the switching frequency can be synchronized to an appropriate  external  signal  applied  to  the  SYNC  input terminal.

## RESET Output

The EV kit provides a RESET output to monitor the status of the device output. The RESET output is an open-drain output from the IC with an external pullup resistor to V OUT on the EV kits. Refer to the IC data sheet for details on the RESET functionality.

## Setting the Output Voltage in Buck Converters

Populating R5 with a 0Ω jumper connects FB to BIAS for a fixed 3.9V or 5V (EV kit default output), or a fixed 3.3V output voltage, depending on the IC version. To set the output to other voltages between 1V and 5V, remove R9, populate R3 with a 0Ω jumper, and populate R1/R2/C17 with  the  appropriate  values.  Other  component modifications might also be required. Refer to the IC data sheet for details on setting the output voltage.

## MAX20006EEVKIT variant (3.9V 2.1MHz 6A)

| PART                  | QTY   | DESCRIPTION                      | MANUFACTURER   | PART#             |
|-----------------------|-------|----------------------------------|----------------|-------------------|
| C8, C9, C10, C11, C22 | 5     | CAP CER 10µF 10V X7R 0805        | MURATA         | GCM21BR71A106KE21 |
| C20, C21, C23         | NP    | CAP CER 10µF 10V X7R 0805        | MURATA         | GCM21BR71A106KE21 |
| L1                    | 1     | INDUCTOR 1µH SMD                 | TDK            | SPM5030T-1R0M-HZ  |
| U1                    | 1     | IC STEP-DOWN CONVERTER 17L-FCQFN | MAXIM          | MAX20006EAFOA/VY+ |

## MAX20008EEVKIT variant (5V 400kHz 8A)

| PART                                 |   QTY | DESCRIPTION                      | MANUFACTURER   | PART#             |
|--------------------------------------|-------|----------------------------------|----------------|-------------------|
| C8, C9, C10, C11, C22, C20, C21, C23 |     8 | CAP CER 10µF 10V X7R 0805        | MURATA         | GCM21BR71A106KE21 |
| L1                                   |     1 | INDUCTOR 4.7µH SMD               | TDK            | SPM6545VT- 4R7M-D |
| U1                                   |     1 | IC STEP-DOWN CONVERTER 17L-FCQFN | MAXIM          | MAX20008EAFOD/VY+ |

## Component Suppliers

| SUPPLIER        | PHONE           | WEBSITE                              |
|-----------------|-----------------|--------------------------------------|
| TDK             | (516) 535-2600  | https://en.tdk.eu/                   |
| Panasonic       | 1-800-344-2112  | https://na.industrial.panasonic.com/ |
| TE Connectivity | +1 800 522 6752 | https://www.te.com/usa-en/home.html  |
| Murata          | +1 770 436 1300 | https://www.murata.com/en-us         |
| Pomona          | NA              | https://www.pomonaelectronics.com/   |

Note:

Indicate that you are using the MAX20006E when contacting these component suppliers.

## Ordering Information

| PART            | TYPE                         |
|-----------------|------------------------------|
| MAX20006EEVKIT# | 5V output, 2.1MHz, 6A EV kit |
| MAX20008EEVKIT# | 5V output, 400kHz, 8A EV kit |

│

## MAX20006E/MAX20008E EV Kit Schematic

<!-- image -->

│

## MAX20006E/MAX20008E EV PCB Layouts

MAX20006E/MAX20008E EV Kit Component Placement - Top

<!-- image -->

MAX20006E/MAX20008E EV Kit PCB Layout - Internal Layer 3

<!-- image -->

MAX20006E/MAX20008E EV Kit PCB Layout - Internal Layer 2

<!-- image -->

MAX20006E/MAX20008E EV Kit Component Placement Bottom

<!-- image -->

│

## MAX20006E/MAX20008E Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                            | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 7/19            | Initial release                                                                                                                                                                                                                                                                                                                                                                                                        | -               |
|                 1 | 6/20            | Added to Evaluate header on each page - MAX20004E. General Description - output changed from 3.9V to 5V. Quick Start Procedure - 6) and 7) removed text from each. Detailed Description - changed from MAX20006EAFOD/VY+ to MAX20006EAFOA/VY+. Table 2. MAX2006EEVKIT variant - row U1 Part# changed - from MAX20006EAFOD/VY+ to MAX20006EAFOA/VY+. Ordering Information - Part MAX20006EEVKIT# changed 3.9V output to | 1, 2, 3         |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied  Ma[im Integrated reserYes the right to change the circuitr\ and speci¿cations without notice at an\ time

│

Evaluate: MAX20004E/MAX20006E/ MAX20008E