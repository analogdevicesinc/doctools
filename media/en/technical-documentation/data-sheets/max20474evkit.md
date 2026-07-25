<!-- lastmod 2022-08-02 -->
## MAX20474 Evaluation Kit

## General Description

The MAX20474 evaluation kit (EV kit) evaluates the performance of the MAX20474 synchronous boost converter.

The  MAX20474  is  a  high-efficiency  DC-DC  converter which boosts a 3.0V to 5.5V input supply from 6V to 18V at  up  to  1A  load.  The  boost  converter  achieves  ±1.5% output error over load, line, and temperature range.

The  device  features  a  2.2MHz  fixed-frequency  PWM mode  for  better  noise  immunity  and  load  transient  response and a pulse-frequency modulation mode (SKIP) for  increased  efficiency  during  light  load  operation.  The 2.2MHz  frequency  operation  allows  for  the  use  of  all ceramic capacitors and minimizes external components. The  programmable  spread-spectrum  frequency  modu -lation  minimizes  radiated  electromagnetic  emissions. Integrated  low  R DSON   switches  improve  efficiency  at heavy loads and simplifies the layout with respect to dis -crete solutions.

Other features include true shutdown, soft-start, and over -current and overtemperature protections.

## Features

●

Synchronous Boost Converter for Small Solution Size

- 4A Peak Input Current
- Resistor Adjustable Output Voltage form 6V to 18V
- 6V to 18V Fixed Output Selection in 250mV Steps
- 3.0V to 5.5V Operating Supply Voltage
- 2.2MHz Switching Frequency Operation
- RESET Output
- Spread Spectrum Operation
- High Precision Performance
- ±1.5% Output Voltage Accuracy Fixed Option
- ±2.2% Output Voltage Accuracy Adjustable Option
- 81 ±3% UV Monitoring
- 121 ±3% OV Monitoring
- Good Load Transient Performance
- Robust for the Automotive Environment
- Current Mode Control, Forced PWM and SKIP Operation
- Overtemperature and Short-Circuit Protection
- Space Saving 3mm x 3.5mm 14-Pin TDFN Package

Ordering Information appears at end of data sheet.

## Evaluates: MAX20474 Adjustable and Non-Adjustable Options

## Quick Start

## Required Equipment

- Bench power supply capable of sourcing 5A minimum
- Electronic or resistive load
- High-bandwidth oscilloscope for analyzing waveforms (500MHz bandwidth suggested)
- Voltmeters (DMM) to measure test points

## Procedure

The  MAX20474  EV  kit  is  delivered  fully  assembled  and tested.  The  MAX20474EVKIT#  is  populated  with  the MAX20474ATDA/V+ output voltage adjustable option. The MAX20474EVKIT#  also  supports  the  MAX20474  fixed output  voltage  option  with  minimal  changes  to  external components.  For  other  adjustable  V OUT configurations, refer  to  the  IC  data  sheet  and  Component  Calculator  for guidance on selecting the proper external components.

- 1) Ensure all jumpers are in their default positions. See Table 1 for default jumper configuration settings.
- 2) Connect the positive terminal of the PSU to the VIN\_ PLUG of the EV kit.
- 3) Connect the negative terminal from the PSU to the PGND6 plug of the EV kit.
- 4) Connect a DMM to VIN\_TP on the EV kit to measure the input voltage.
- 5) Connect a second DMM to VOUT\_TP of the EV kit to measure the output voltage.
- 6) Connect CH1 of an oscilloscope to LX\_TP of the EV kit to measure the switch node voltage waveform.
- 7) Set the positive output of the PSU to 5V with a cur -rent limit of 5A, then apply power to the EV kit.
- 8) Verify that the voltage measured at VIN\_TP is 5V and the voltage measured at VOUT\_TP is approxi -mately 12V.
- 9) Connect an electronic load to the VOUT\_PLUG of the EV kit and set it for 1A, then turn on the electronic load.
- 10) Verify that the voltage measured at VOUT\_TP of the EV kit is within ± 1.5% of the unloaded output voltage from step 8.
- 11) Congratulations! Verification of the MAX20474 EV kit is complete.
- 12) Repeat steps 1-11 when exchanging devices to ensure a proper soldering connection.

<!-- image -->

## MAX20474 Evaluation Kit

## Table 1. Default Jumper Settings

| JUMPER             | SHUNT POSITION   | FUNCTION                         |
|--------------------|------------------|----------------------------------|
| J1-ENABLE          | 1-2              | Enable boost controller          |
| J2-MODE            | 1-2              | Default FPWM operation           |
| J3-SPREAD SPECTRUM | 2-3              | Default spread spectrum disabled |

## Table 2. Test Points

| TEST POINT   | FUNCTION                                             |
|--------------|------------------------------------------------------|
| VIN_TP       | Test point for the input voltage                     |
| LX_TP        | Test point for the switch node voltage               |
| VOUT_TP      | Test point for the output voltage                    |
| SIG_INJP     | Test point for positive transformer signal injection |
| SIG_INJN     | Test point for negative transformer signal injection |

## Detailed Description

The  MAX20474  EV  kit  allows  for  typical  evaluation  of device  performance  with  a  fixed  output  voltage  or  an adjustable  output  voltage.  See  the Adjustable  Output Voltage section  in  this  document  for  more  details.  With the installation  of  R2,  it  is  also  possible  to  evaluate  the closed loop stability performance if a network analyzer is available. Contact the factory for guidance on connecting measuring  a  network  analyzer  to  measure  closed  loop performance.

## Synchronization (SYNC)

The SYNC pin provides three separate features depend -ing on the connection. When the SYNC jumper (J2) is tied to  AV  (position  1-2),  the  MAX20474  operates  in  FPWM mode. If SYNC is tied to ground (position 2-3) or left open, the MAX20474 operates in SKIP mode to provide higher efficiency with light load conditions. SYNC can be directly driven from an external source to synchronize the switch -ing  frequency  other  than  the  factory  trimmed  2.2MHz. To  change  the  switching  frequency  of  the  MAX20474, connect an external clock source to the SYNC test loop. When the MAX20474 is driven from an external source, the MAX20474 always operates in FPWM mode. Refer to the IC data sheet for the correct frequency range supported by the SYNC pin.

## Enable Input (EN1)

The ENABLE pin is an active high input. However, by con -necting ENABLE to ground, the output of the MAX20474 stops switching and the output is pulled to ground through an  internal  pulldown  resistor.  Jumper  J1  enables  and

## Table 3. Test Loops

| TEST LOOP   | FUNCTION                                     |
|-------------|----------------------------------------------|
| VIN_AV      | Test loop for V IN and AV (shorted together) |
| V OUT       | Test loop for the output voltage             |
| SYNC        | Test loop for the external clock             |
| EN          | Test loop for the enable pin                 |
| BIAS        | Test loop for the bias pin                   |
| RESET       | Test loop for the RESET pin                  |
| PGND (1-4)  | Test loops for power ground                  |

disables the MAX20474. When J1 is in position 1-2, the MAX20474 is enabled. If J1 is in position 2-3 or left open, the MAX20474 is disabled.

## Spread Spectrum Enable Input (SSEN)

When  tied  high,  the  SSEN  pin  enables  spread  spec -trum functionality to help mitigate EMI. When the SSEN jumper  (J3)  is  connected  to  VIN\_AV  (position  1-2),  the MAX20474 operates  with  spread  spectrum  enabled.  To disable  spread  spectrum,  connect  the  SSEN  jumper  to position 2-3 in order to connect the SSEN pin to ground.

## RESET Output

The RESET output  is  an  open-drain  output  connection that requires a pullup resistor. The hold times for RESET are factory OTP programmed from a range of 0.5ms to 14.8ms. RESET can be asserted when the output voltage is outside of the OV/UV window. Refer to the product data sheet  for  expected  OV/UV  levels  relative  to  the  output voltage.

## Adjustable Output Voltage

The MAX20474 EV kit can be accommodated to evaluate a  MAX20474 adjustable output voltage option.  Refer  to the Ordering Information table in the product data sheet to  ensure  that  the  desired  MAX20474  device  supports adjustable output voltages.

For a given output voltage, the correct value of external components must be installed for the external feedback network on the MAX20474 EV Kit: R3, R4, and C1. These feedback network values are determined by several criteria. Refer to the MAX20474 product data sheet for the correct calculation procedure.

## Evaluates: MAX20474 Adjustable and Non-Adjustable Options

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20474EVKIT# | EV KIT |

#Denotes a RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

## MAX20474 EV Kit Bill of Materials

|   QTY | REF_DES                                          | DNI/DNP   | VALUE           | MFG PART #                                                                           | MANUFACTURER                                 | DESCRIPTION                                                                      |
|-------|--------------------------------------------------|-----------|-----------------|--------------------------------------------------------------------------------------|----------------------------------------------|----------------------------------------------------------------------------------|
|     1 | U1                                               | -         | MAX20474ATDA/V+ | MAX20474ATDA/V+                                                                      | MAXIM                                        | SYNCHRONOUS BOOST CONVERTER;                                                     |
|    10 | BIAS, EN, PGND1-PGND4, RESET, SYNC, VIN_AV, VOUT | -         | MAXIMPAD        | 9020 BUSS                                                                            | WEICO WIRE                                   | WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                         |
|     1 | C1                                               | -         | 0.1UF           | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB         | MURATA; TDK; TAIYO YUDEN; TDK                | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                   |
|     1 | C2                                               | -         | 2.2UF           | GRM188R71A225KE15; CL10B225KP8NNN; C1608X7R1A225K080AC; C0603C225K8RAC               | MURATA; SAMSUNG; TDK; KEMET                  | CAP; SMT (0603); 2.2UF; 10%; 10V; X7R; CERAMIC                                   |
|     1 | C3                                               | -         | 10UF            | CGA4J1X7S1C106K125; GCM21BC71C106KE35                                                | TDK; MURATA                                  | CAP; SMT (0805); 10UF; 10%; 16V; X7S; CERAMIC                                    |
|     2 | C4, C12                                          | -         | 0.22UF          | CGA3E3X7R1H224K080AB                                                                 | TDK                                          | CAP; SMT (0603); 0.22UF; 10%; 50V; X7R; CERAMIC                                  |
|     1 | C7                                               | -         | 22UF            | GRM32ER71E226KE15; CL32B226KAJNFN; CL32B226KAJNNW; TMK325B7226KM; C1210C226K3RAC7210 | MURATA; SAMSUNG; SAMSUNG; TAIYO YUDEN; KEMET | CAP; SMT (1210); 22UF; 10%; 25V; X7R; CERAMIC                                    |
|     1 | C9                                               | -         | 10UF            | GRM188R6YA106MA73                                                                    | MURATA                                       | CAP; SMT (0603); 10UF; 20%; 35V; X5R; CERAMIC                                    |
|     1 | C10                                              | -         | 470UF           | T530X477M006ATE004; 6THB470M                                                         | KEMET; PANASONIC                             | CAP; SMT (7343-43); 470UF; 20%; 6.3V; POLYMER                                    |
|     3 | J1-J3                                            | -         | PEC03SAAN       | PEC03SAAN                                                                            | SULLINS                                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                        |
|     1 | L1                                               | -         | 1UH             | TFM252012ALMA1R0MTAA                                                                 | TDK                                          | INDUCTOR; SMT; THIN FILM; 1UH; 20%; 4.1A                                         |
|     3 | LX_TP, VIN_TP, VOUT_TP                           | -         | N/A             | 5005                                                                                 | KEYSTONE                                     | TEST POINT;BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;    |
|     4 | PGND5, PGND6, VIN_PLUG, VOUT_PLUG                | -         | 108-0740-001    | 108-0740-001                                                                         | EMERSON NETWORK POWER                        | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                         |
|     1 | R1                                               | -         | 10K             | CRCW060310K0JN;ERJ-3GEYJ103                                                          | VISHAY DALE; PANASONIC                       | RES; SMT (0603); 10K; 5%; +/-200PPM/DEGK; 0.1000W                                |
|     1 | R2                                               | -         | 10              | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0                                         | VISHAY DALE; ROHM                            | RES; SMT (0603); 10; 1%; +/-100PPM/DEGC; 0.1000W                                 |
|     1 | R3                                               | -         | 90.9K           | ERJ-3EKF9092                                                                         | PANASONIC                                    | RES; SMT (0603); 90.9K; 1%; +/-100PPM/DEGC; 0.1000W                              |
|     1 | R4                                               | -         | 6.49K           | CRCW06036K49FK; ERJ-3EKF6491                                                         | VISHAY DALE; PANASONIC                       | RES; SMT (0603); 6.49K; 1%; +/-100PPM/DEGC; 0.1000W                              |
|     2 | SIG_INJN, SIG_INJP                               | -         | N/A             | 5007                                                                                 | KEYSTONE                                     | TEST POINT; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     0 | C5, C6, C8                                       | DNP       | 22UF            | GRM32ER71E226KE15; CL32B226KAJNFN; CL32B226KAJNNW; TMK325B7226KM; C1210C226K3RAC7210 | MURATA; SAMSUNG; SAMSUNG; TAIYO YUDEN; KEMET | CAP; SMT (1210); 22UF; 10%; 25V; X7R; CERAMIC                                    |
|     0 | C11                                              | DNP       | 1PF             | CL10C010BBNC; C1608C0G1H010B                                                         | SAMSUNG ELECTRONICS; TDK                     | CAP; SMT (0603); 1PF; 50V; C0G; CERAMIC                                          |

## MAX20474 EV Kit Schematic

<!-- image -->

## MAX20474 Evaluation Kit

## MAX20474 EV Kit PCB Layout

MAX20474 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX20474 EV Kit PCB Layout-Layer 2

<!-- image -->

## Evaluates: MAX20474 Adjustable and Non-Adjustable Options

MAX20474 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX20474 EV Kit PCB Layout-Layer 3

<!-- image -->

## MAX20474 EV Kit PCB Layout (continued)

MAX20474 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX20474 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

## MAX20474 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 7/21            | Release for Market Intro | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX20474 Adjustable and

Non-Adjustable Options