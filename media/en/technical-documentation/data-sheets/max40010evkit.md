<!-- lastmod 2022-08-03 -->
## MAX40010 Evaluation Kit

## General Description

The MAX40010 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX40010  dual-channel,  highprecision, high-voltage, current-sense amplifier. This EV kit demonstrates the MAX40010 in a 5-PIN SOT-23 package.

The EV kit PCB comes with a MAX40010TAWT+ installed, which is the 20V/V gain version. Other gain options are available.  Contact  the  factory  for  the  pin-compatible MAX40010LAWT+  (G  =  12.5V/V),  MAX40010FAWT+ (G = 50V/V), and MAX40010HAWT+ (G = 100V/V).

## EV Kit Contents

- MAX40010 EV Kit Board

## Features

- Precision, Real-Time Current Monitoring
- +2.7V to +76V Input Common-Mode Range
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX40010

## Quick Start

## Required Equipment

The following items are required for operation:

- MAX40010 EV kit
- +3.3V, 1A DC power supply
- +5V, 3A DC power supply
- An electronic load capable of sinking 3A (i.e., HP6060B)
- Two digital voltmeters

## Procedure

The  MAX40010  EV  kit  is  fully  assembled  and  tested. Follow  the  steps  below  to  verify  the  board  operation. Caution: Do not turn on power supply or the electronic load until all connections are made .

- 1)  Connect the positive terminal of the +3.3V supply to the  VDD  test  point  and  the  negative  terminal  of  the supply to the nearest GND test point.
- 2)  Connect the positive terminal of the +5V supply to the VSENSE+ test point and the negative terminal of the supply to the nearest GND test point.
- 3)  Set the electronic load to sink 2.5A.
- 4)  Connect the positive terminal of the electronic load to the VSENSE- test point and the negative terminal of the supply to the nearest GND test point.
- 5)  Connect  the  first  voltmeter  between  test  points  RS+ and RS- to measure V SENSE .
- 6)  Connect the second voltmeter between VOUT and the nearest GND test points.
- 7)  Turn on the power supplies.
- 8)  Enable the electronic load.
- 9)  Verify that the first voltmeter displays 125mV and the second voltmeter displays 2.5V.

<!-- image -->

## Detailed Description of Hardware

The MAX40010 EV kit provides a proven design to evaluate the  MAX40010  high-side,  dual-channel,  current-sense amplifier, which offers precision accuracy specifications of input offset voltage (V OS ) less than 12µV (max) and gain error less than 0.1% (max).

## Applying the VRS+ Supply and the Load

The EV kit  is  installed  with  a  MAX40010TAWT+,  which has a 20V/V gain. The current-sense resistors (R SENSE ) value is 0.05Ω with ±0.5% tolerance. The V OUT for each channel given by:

<!-- formula-not-decoded -->

where A V is the gain and I LOAD  is the current load applied to the device. Normal operating V RS+  and V RS-  range is 2.7V to 76V.

## MAX40010 EV Kit Bill of Materials

|   ITEM | REF_DES                     | DNI/DNP   |   QTY | MFG PART #                                                                            | MANUFACTURER                  | VALUE         | DESCRIPTION                                                                                                             | COMMENTS   |
|--------|-----------------------------|-----------|-------|---------------------------------------------------------------------------------------|-------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | C1                          | -         |     1 | C0603C104K4RAC; GCM188R71C104KA37; C1608X7R1C104K; GRM188R71C104K; C0603X7R160-104KNE | KEMET/MURATA/TDK/ VENKEL LTD. | 0.1UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                             |            |
|      2 | C2                          | -         |     1 | GRM21BR71C475KA73                                                                     | MURATA                        | 4.7UF         | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R            |            |
|      3 | GND, TP1-TP4                | -         |     5 | 5011                                                                                  | KEYSTONE                      | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|      4 | R1                          | -         |     1 | LVK12R050DE                                                                           | OHMITE MFG CO.                | 0.05          | RESISTOR; 1206; 0.05 OHM; 0.5%; 50PPM; 0.5W; METAL FILM                                                                 |            |
|      5 | RS+, RS-                    | -         |     2 | 5000                                                                                  | KEYSTONE                      | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |            |
|      6 | U1                          | -         |     1 | MAX40010TAUT+                                                                         | MAXIM                         | MAX40010TAUT+ | EVKIT PART-IC; MAX40010TAUT+; PACKAGE OUTLINE: 21-0058; PACKAGE CODE: U6SN-1; SOT6                                      |            |
|      7 | VDD, VOUT, VSENSE+, VSENSE- | -         |     4 | 5010                                                                                  | KEYSTONE                      | N/A           | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                      |            |
|      8 | C3, C4, C7                  | DNP       |     0 | C1206C102K1RAC                                                                        | KEMET                         | 1000PF        | CAPACITOR; SMT (1206); CERAMIC CHIP; 1000PF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                            |            |
|      9 | C9                          | DNP       |     0 | C0603C181K5GAC                                                                        | KEMET                         | 180PF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 180PF; 50V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+/                    |            |
|     10 | R3, R4, R7                  | DNP       |     0 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00                                            | VISHAY DALE/ROHM /PANASONIC   | 0             | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                    |            |
|     11 | PCB                         | -         |     1 | MAX40010                                                                              | MAXIM                         | PCB           | PCB Board:MAX40010 EVALUATION KIT                                                                                       |            |

## Measuring the Load Current

The load current is measured as a voltage drop (V SENSE ) across  an  external  sense  resistor.  This  voltage  is  then amplified  by  the  current-sense  amplifier  and  presented at its VOUT pin. Like all differential amplifiers, the output voltage has two components of error (an offset error and a gain error). The offset error affects accuracy at low currents and a gain error affects accuracy at large currents-both errors effect accuracy  at intermediate currents.  By minimizing both offset and gain errors, accuracy can be optimized over a wide dynamic range.

## MAX40010 EV Kit Schematic

<!-- image -->

## MAX40010 EV Kit PCB Layout

MAX40010 EV Kit-Top Silkscreen

<!-- image -->

MAX40010 EV Kit-Bottom

<!-- image -->

MAX40010 EV Kit-Top

<!-- image -->

MAX40010 EV Kit-Bottom Silkscreen

<!-- image -->

│

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40010EVKIT# | EV Kit |

# RoHS-compliant.

Evaluates: MAX40010

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/16           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSlieG. 0a[iP ,nteJrateG reserves the riJht to chanJe the circuitr\ anG sSeci¿cations without notice at an\ tiPe.

│

Evaluates: MAX40010