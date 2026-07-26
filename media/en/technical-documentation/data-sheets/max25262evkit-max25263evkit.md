<!-- lastmod 2022-08-05 -->
<!-- image -->

Evaluates: MAX25262/MAX25263

Click here to ask an associate for production status of specific part numbers.

## General Description

The MAX25262/MAX25263 evaluation kits (EV kits) come fully assembled and tested. The EV kits demonstrate the MAX25262/MAX25263 synchronous buck converters. The EV kits operate over a wide 3.5V to 65V input range. The MAX25262EVKIT is populated with the MAX25262AFOA/ VY+,  and  the  MAX25263EVKIT  is  populated  with  the MAX25263AFOC/VY+. The EV kit output voltage is fixed and easily configured with minimum component changes. Other converters in the family can be tested on the same EV kit;  however,  changing  the  IC  or  the  output  voltage may  also  require  changing  other  components.  Consult the IC data sheet for guidance on selecting the proper ICs and external components. Output voltage quality can be monitored by observing the PGOOD signal.

## Benefits and Features

- Input Supply Range from 3.5V to 65V
- Output Voltage: 3.3V/5V Fixed and Adjustable from 1V to 20V
- 2A/3A Output-Current Capability
- Frequency - Synchronization Input
- Spread Spectrum Available
- Voltage Monitoring PGOOD Output Available
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX25262/MAX25263 Evaluation Kit

## Quick Start

## Required Equipment

- MAX25262EVKIT/MAX25263EVKIT
- 65V, 3A power supply
- Appropriate resistive load, or an electronic load that can sink 3A
- Digital multimeter (DMM)
- Oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Connect  the  positive  and  negative  terminals  of  the power supply to the SUP and GND1 test pads, respectively.
- 3) Set the power supply voltage to 24V and current limit to 3A.
- 4) Turn on the power supply.
- 5) Using the DMM, verify that OUT is as requested.
- 6) Verify that the switching frequency is 2.1MHz/400kHz (approximately) by monitoring the inductor switching voltage with the oscilloscope.
- 7) Connect  the  positive  and  negative  terminals  of  the electronic load to OUT and GND, respectively.
- 8) Set  the  electronic  load  to  the  desired  current  at  or below 3A, or use an equivalent resistive load with an appropriate power rating.
- 9) Adjust current limit on the power supply as necessary.
- 10)  Turn on the power supply and electronic load.
- 11)  Verify that voltage across the V OUT  and GND is as requested.

319-100605; Rev 1; 12/21

©

## MAX25262/MAX25263 Evaluation Kit

## Detailed Description of Hardware

The  MAX25262  and  MAX25263  EV  kits  provide  a proven layout for the MAX25262 and MAX25263 synchronous buck regulator ICs, respectively. The input voltages range from 3.5V to 65V and deliver up to 3A. The EV kits can handle an input supply transient up to 70V. Various test points are included for evaluation.

## External Synchronization

The IC can operate in two modes: forced-PWM (FPWM) mode or skip mode. Skip mode has better efficiency for light-load  conditions.  When  SYNC  is  pulled  low,  the  IC operates in skip mode for light loads and PWM mode for larger loads. When SYNC is pulled high, the IC is forced to  operate  in  PWM  mode  across  all  load  conditions. SYNC can be used to synchronize with other supplies if a clock source is present. The IC is forced to operate in FPWM mode when SYNC is connected to a clock source.

## Buck Output Monitoring (PGOOD)

The  EV  kit  provides  a  power-good  output  test  point (PGOOD) to monitor the status of the buck output (OUT). PGOOD is high impedance when the output is in regulation. PGOOD goes low when the corresponding regulator output  voltage  drops  below  93.5%  (typ)  of  its  nominal regulation voltage or goes above 108% (typ) of its nominal regulation voltage.

## Programming Buck Output Voltage

The IC can provide a fixed 3.3V/5V output voltage or an adjustable  1V  to  20V  output  voltage. To  program  V OUT voltage,  place  appropriate  resistors  in  positions  R5  and R6 according to the following equation:

<!-- formula-not-decoded -->

## Evaluates: MAX256/3

## Spread Spectrum Option

The spread spectrum is pin selectable using the SPS pin. Pull the pin high to enable spread spectrum. When spread spectrum  is  enabled,  the  operating  frequency  is  varied ±6%, centered at switching frequency.

The internal  spread  spectrum  is  disabled  if  the  devices are  synchronized  to  an  external  clock.  However,  the devices do not filter the input clock on the FSYNC pin and pass any modulation (including spread spectrum) present on the driving external clock.

## EXTVCC Switchover

The internal linear regulator can be bypassed by connecting an external supply, or the MAX25262/MAX25263 out -put to EXTVCC. With valid supply applied to EXTVCC, it will be the supply for the internal gate driver. The R DSON of the FET will increase if the EXTVCC drops below 5V, which will reduce the efficiency, therefore approximately 5V for EXTVCC is recommended for higher efficiency.

## Table 1. Default Jumper Settings

Note : If the output voltage is configured above 5V, please ensure the EXTVCC jumper is at position 2-3 to avoid damage to the part.

| JUMPER   | DEFAULT SHUNT POSITION   | FUNCTIONS                  |
|----------|--------------------------|----------------------------|
| ENABLE   | 1-2                      | Buck enabled               |
| PGOOD    | Installed                | PGOOD TP pulled up to bias |
| SPS      | 1-2                      | Spread Spectrum ON         |
| SYNC     | 1-2                      | FPWM mode                  |
| EXTVCC   | 1-2                      | EXTVCC connect to OUT      |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25262EVKIT# | EV Kit |
| MAX25263EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX25262/MAX25263 Evaluation Kit

## MAX25262/MAX25263 EV Kit Bill of Materials

| REF DES                                                   | MFG PART #        | MANUFACTURER              | VALUE         | DESCRIPTION                                                                          |
|-----------------------------------------------------------|-------------------|---------------------------|---------------|--------------------------------------------------------------------------------------|
| R1                                                        | CRCW060320K0JN    | VISHAY DALE               | 20K           | RESISTOR; 0603; 20KΩ; 5%; 200PPM; 0.10W; METAL FILM                                  |
| R2, R3                                                    | MC0603SAF0000T5E  | MULTICOMP                 | 0             | RES; SMT (0603);0;1%; ±400PPM/DEGC;0.1W                                              |
| R4, R5, R6                                                |                   |                           | DNI           | RES 0603                                                                             |
| L1                                                        | FBMH3225HM102N    | TAIYO YUDEN               | 1000          | INDUCTOR; SMT (1210); FERRITE-BEAD; 1000 IMPEDANCE AT 100MHZ; TOL = ±30%; 2A         |
| L2                                                        |                   |                           | Install short |                                                                                      |
| C1, C7, C9, C12, C22                                      | GCJ188R72A104KA01 | MURATA                    | 0.1µF         | CAP; SMT (0603); 0.1µF; 10%; 100V; X7R; CERAMIC CHIP                                 |
| C2, C3, C5, C6, C10, C11                                  | 08051C105K4Z2A    | AVX                       | 1µF           | CAP; SMT (0805); 1µF; 10%; 100V; X7R; CERAMIC CHIP                                   |
| C4                                                        | EEH-ZC1K470P      | PANASONIC                 | 47µF          | CAP; SMT (CASE_G); 47µF; 20%; 80V; ALUMINUM-ELECTROLYTIC                             |
| C8                                                        | GRM188R71A225KE15 | MURATA                    | 2.2µF         | CAP; SMT (0603); CERAMIC CHIP; 2.2µF; 10V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R |
| C21                                                       |                   |                           | DNI           |                                                                                      |
| GND, GND2, VSUP, VOUT                                     | 575-4             | KEYSTONE                  |               | RECEPTACLE; JACK; BANANA                                                             |
| BIAS, FBR, GNDS, GNDS1, GNDS2, GNDS3, PGOOD, VOUTS, VSUPS | 5012              | KEYSTONE                  |               | TEST POINT                                                                           |
| VSUP_FILTER                                               | 9020 BUSS         | WEICO WIRE                |               |                                                                                      |
| ENABLE, SPS, EXTVCC, SYNC                                 | PEC03SAAN         | SULLINS ELECTRONICS CORP. |               | 3PINS                                                                                |
| PGOOD                                                     | PBC02SAAN         | SULLINS ELECTRONICS CORP. |               | 2PINS                                                                                |

│

Evaluates: MAX256/3

Evaluates: MAX256/3

## MAX25262/MAX25263 EV Kit Bill of Materials (continued)

| MAX25262EVKIT# Variant (2.1MHz, 5V)   | MAX25262EVKIT# Variant (2.1MHz, 5V)   | MAX25262EVKIT# Variant (2.1MHz, 5V)   | MAX25262EVKIT# Variant (2.1MHz, 5V)   | MAX25262EVKIT# Variant (2.1MHz, 5V)   |
|---------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|
| REF DES                               | MFG PART #                            | MANUFACTURER                          | VALUE                                 | DESCRIPTION                           |
| U1                                    | MAX25262AFOA/VY+                      | Analog Devices                        |                                       | Buck converter IC                     |
| L3                                    | XAL5030-332ME                         | Coilcraft                             | 3.3µH                                 |                                       |
| C13, C14, C16, C18                    | CGA4J1X7S1E106K125AC                  | TDK                                   | 10µF                                  | CAP CER 10µF 25V X7S 0805             |
| C15, C17, C19, C20                    |                                       |                                       | DO NOT INSTALL                        |                                       |

| MAX25263EVKIT# Variant (400kHz, 5V)    | MAX25263EVKIT# Variant (400kHz, 5V)   | MAX25263EVKIT# Variant (400kHz, 5V)   | MAX25263EVKIT# Variant (400kHz, 5V)   | MAX25263EVKIT# Variant (400kHz, 5V)   |
|----------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|
| REF DES                                | MFG PART #                            | MANUFACTURER                          | VALUE                                 | DESCRIPTION                           |
| U1                                     | MAX25263AFOC/VY+                      | Analog Devices                        |                                       | Buck converter IC                     |
| L3                                     | XAL5050-103ME                         | Coilcraft                             | 10µH                                  |                                       |
| C13, C14, C15, C16, C17, C18, C19, C20 | CGA4J1X7S1E106K125AC                  | TDK                                   | 10µF                                  | CAP CER 10UF 25V X7S 0805             |

│

## MAX25262/MAX25263 EV Kit Schematic Diagram

See the BOM for precise component values.

<!-- image -->

## MAX25262/MAX25263

## Evaluation Kit

## MAX25262/MAX25263 EV Kit PCB Layout Diagrams

<!-- image -->

MAX25262/MAX25263 EV Kit PCB Layout - Top Silkscreen

MAX25262/MAX25263 EV Kit PCB Layout - Top Layer

<!-- image -->

MAX25262/MAX25263 EV Kit PCB Layout - Internal Layer 2

<!-- image -->

Evaluates: MAX256/3

│

## Evaluation Kit

## MAX25262/MAX25263 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX25262/MAX25263 EV Kit PCB Layout - Internal Layer 3

MAX25262/MAX25263 EV Kit PCB Layout - Bottom Layer

<!-- image -->

MAX25262/MAX25263 EV Kit PCB Layout - Bottom Silkscreen

<!-- image -->

Evaluates: MAX256/3

│

## MAX25262/MAX25263 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------|-----------------|
|                 0 | 9/20            | Initial release                                                                            | -               |
|                 1 | 12/21           | Updated the Detailed Description of Hardware, Bill of Materials, Schematic, and PCB Layout | 2, 4-7          |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX256/3