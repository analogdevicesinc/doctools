<!-- lastmod 2023-02-08 -->
<!-- image -->

Evaluates: MAX49925

## General Description

The MAX49925 evaluation kit (EV kit) is a fully tested and assembled  circuit  that  demonstrates  the  capabilities  of the MAX49925, high-precision, high-voltage, bidirectional current  sense  amplifier  for  PWM  applications,  such  as servo motor control and solenoid drive. The MAX49925 are  ideal  for  48V,  or  less  BLDC,  induction  motor  applications  (such  as  robotics),  pick-and-place  machines, 3D  prints,  or  other  servo  motor  control  systems.  The MAX49925  has  an  extended  protective  immunity  from -42V to +80V, providing protection against reverse battery and high voltage spikes. This also can reduce the BOM complexity at the system level since a smaller TVS might be required. The MAX49925 EV kit is available in a 2' x 2'  PCB  and  operates  over  the  automotive  temperature range of -40°C to +125°C. This EV kit demonstrates the MAX49925  in  a  10-pin  TDFN  package,  with  four  gain options 10V/V, 20V/V, 50V/V, 100V/V by the combination of the Gain1 and Gain2 pins.

## Benefits and Features

- ●
- Selectable Gain Options: 10V/V, 20V/V, 50V/V, 100V/V
- 5μV (Typ) Input Offset Voltage
- ±0.3% (Max) Gain Error (Thin Film ~0.25%)
- -0.3V to +65V Input Common-Mode Range
- -40°C to +125°C Temperature Range
- 3mm x 3mm 10-pin TDFN with Side Wettable Flanks
- Proven 2' x 2' 2-Layer 2oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

©

## MAX49925 Evaluation Kit

## MAX49925 EV Kit Files

| FILE                             | DECRIPTION               |
|----------------------------------|--------------------------|
| Max49925_evkit_p3_Schematic      | EV Kit Schematic         |
| MAX49925_EVKIT_P3 _MARKETING_PCB | EV Kit PCB Layout        |
| build_bom_max49925_evkit_p3      | EV Kit Bill of Materials |
| Max49925_evkit_p3_odb            | EV Kit ODB               |

## MAX49925 EV Kit Photo

<!-- image -->

319-100861; Rev 2; 2/23

## MAX49925 Evaluation Kit

## Quick Start

## Required Equipment

- MAX49925 EV kit
- 0 to 100V, 0.4A DC power supply for VCM input
- +3.3V, 100mA device DC power supply
- Electronic load capable of sinking 3A (HP6060B)
- One Agilent ®  34401A 61/2 digital multimeter (DMM)
- One 3458 81/2 digital multimeter (DMM)

## Procedure

The  MAX49925  EV  kit  is  fully  assembled  and  tested. Follow the steps to verify board operation: Caution: Do not turn on the power supply or the electronic load until all the connections are complete.

- 1) Connect a +3.3V supply and ground to VDD connector.
- 2) Set GAIN1 and GAIN2 as LH; Gain option has been set to 50V/V, see Table 2 and Table 3.
- 3) Connect the positive terminal of the 0 to 100V DC power supply to the RS- input and the negative ter -minal to the GND input.
- 4) Set the electronic load to sink 300mA.
- 5) Connect the positive terminal of the electronic load to the RS+ input and the negative terminal of the electronic load to the nearest GND input connection on the board.
- 6) Connect the positive terminal of the calibrator/ DC power supply to the REF1/REF2 input. Set the calibrator/DC power supply voltage output to VDD/2 = 1.65V.
- 7) Connect the 3458 81/2 digital multimeter between the test points VRS+ and VRS- to measure the dif -ferential input voltage across the inputs (VSENSE).
- 8) Connect the 34401A 61/2 digital multimeter across the OUT and REF1/REF2 test points to measure the MAX49925 output.
- 9) Turn on the power supplies and the calibrator, then the electronic load.
- 10)  Enable the electronic load.
- 11)  Verify that the 3458 81/2 digital multimeter displays 300mA x 50mΩ = +15mV and that the 34401A 61/2 digital multimeter displays 2.25V.
- 12) Turn off the electronic load and set the electronic load to source 300mA.

## Evaluates: MAX4925

- 13)  Turn on the electronic load and verify that the 3458 81/2 digital multimeter displays -15mV and that the 34401A 61/2 digital multimeter displays 750mV.
- 14)  EV kit is now ready for further testing.
- 15) After the functions are verified, do not forget to turn off the electronic load, calibrator, and power supply.

## Detailed Description of Hardware

The MAX49925 EV kit provides a proven design to evaluate  the  MAX49925  high-precision,  high-voltage  bidirectional  current  sense  amplifier  for  PWM  application.  The device  offers  precision  accuracy  specifications  of  input offset voltage (VOS) less than 5μV (max) and gain error less than 0.3% (max).

The  device  has  a  proprietary  input  stage  designed  to reject high gradient PWM common mode voltage inputs while  accurately  monitoring  the  load  current  across  its inputs.

## Theory of Operation

## Bidirectional Operation

The  MAX49925  EV  kit  evaluates  the  MAX49925  bidirectional  current  sense  amplifier.  MAX49925  give  more gain  options  by  external  gain  selection  pins.   And  give the output to different reference setting by external pins REF1 and REF2. The output is set to the VREF1/VREF2 voltage at no load.

The (VREF1+VREF2) /2 voltage can either be from inter -nal 1.65V reference voltage generated by internal resistor string or an external reference supplied at VREF1/VREF2 input.  Current  in  the  positive  direction  in  reference  to RS+ and RS- increases the output voltage from VREF1/ VERF2 (V) and current in the negative direction decreas -es the output voltage from VREF1/VREF2 (V).

Hence, the output equation becomes:

VOUT (V) = [(ILOAD(A) x RSENSE(Ω)) x GAIN(V/V)] + (VREF1(V)+VREF2 (V))/2.

## External Reference

When choosing an external reference at the VREF input, it is recommended to choose VREF1/VREF2 (V) = (1/2) x VDD (V) and the VDD (V) value must not exceed absolute maximum ratings.

Table 1. Jumper Functions (J3, J6)

| JUMPER LABEL   | DEFAULT POSITION   | FUNCTION                                                       |
|----------------|--------------------|----------------------------------------------------------------|
| J3             | Installed          | Output reference voltage generated by internal resistor string |
| J3             | Not Installed*     | Output reference voltage provided by external source           |
| J6             | Installed          | Output reference voltage generated by internal resistor string |
| J6             | Not Installed*     | Output reference voltage provided by external source           |

## Table 2. Jumper Functions (J4, J5)

| JUMPER LABEL   | SHUNT POSITION   | GAIN 1 LOGIC STATE   | GAIN 2 LOGIC STATE   |
|----------------|------------------|----------------------|----------------------|
| J4             | 1-2              | H                    |                      |
| J4             | 2-3*             | L                    |                      |
| J5             | 1-2*             |                      | H                    |
| J5             | 2-3              |                      | L                    |

## Table 3. GAIN Option Selected

| GAIN 1 LOGIC STATE   | GAIN 2 LOGIC STATE   | GAIN OPTION SELECTED   |
|----------------------|----------------------|------------------------|
| L                    | L                    | 10V/V                  |
| H                    | L                    | 20V/V                  |
| L                    | H                    | 50V/V                  |
| H                    | H                    | 100V/V                 |

Note: Indicate that L is logic 0, H is logic 1

## Component Suppliers

| SUPPLIER                 | PHONE             | WEBSITE                              |
|--------------------------|-------------------|--------------------------------------|
| TDK                      | +81 3 67 78 10 00 | https://www.tdk-electronics.tdk.com/ |
| KEYSTONE                 | (516) 328-7500    | https://www.keyelco.com/             |
| WURTH ELECTRONICS INC    | +1 877 6902207    | https://www.we-ics.com               |
| KEMET                    | +91-95131-45888   | https://www.kemet.com/en/us.html     |
| AVX                      | +1 (864) 967-2150 | https://www.avx.com/                 |
| LITE-ON ELECTRONICS INC. | 0515-83368598     | https://www.liteon.com/en-us         |
| SAMTEC                   | 1-800-726-8329    | https://www.samtec.com/              |
| VISHAY                   | 1-800-344-4539    | https://www.vishay.com/              |
| PANASONIC                | 0571-87257895     | https://panasonic.cn/                |
| BOURNS                   | +1 951-781-5500   | https://www.bourns.com/              |
| YAGEO                    | +886 2 6629 9999  | https://www.yageo.com/en/Home        |

Note:

Indicate that you are using the MAX49925 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX49925EVKIT# | EV Kit |

Evaluates: MAX4925

│

## MAX49925 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                      | DNI/DNP   |   QTY | MFG PART #                                                   | MANUFACTURER                                | VALUE     | DESCRIPTION                                                                                                                                                                                                           | COMMENTS   |
|--------|------------------------------------------------------------------------------|-----------|-------|--------------------------------------------------------------|---------------------------------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | C1-C3                                                                        |           |     3 | GRM188R72A102KA01; C1608X7R2A102K080AA                       | MURATA;TDK                                  | 0.001UF   | CAP; SMT (0603); 0.001UF; 10%; 100V; X7R; CERAMIC                                                                                                                                                                     |            |
|      2 | C4                                                                           |           |     1 | C0603C200J5GAC; GRM1885C1H200JA01                            | KEMET;MURATA                                | 20PF      | CAP; SMT (0603); 20PF; 5%; 50V; C0G; CERAMIC                                                                                                                                                                          |            |
|      3 | C5                                                                           |           |     1 | C0603C104K8RAC                                               | KEMET                                       | 0.1UF     | CAP; SMT (0603); 0.1UF; 10%; 10V; X7R; CERAMIC                                                                                                                                                                        |            |
|      4 | C6                                                                           |           |     1 | GRM188Z71A106KA73                                            | MURATA                                      | 10UF      | CAP; SMT (0603); 10UF; 10%; 10V; X7R; CERAMIC ;                                                                                                                                                                       |            |
|      5 | GAIN1, GAIN2, GND, GND_2- GND_4, REF1, REF2, RS+, RS-, VDD, VOUT, VRS+, VRS- |           |    14 | 9020 BUSS                                                    | WEICO WIRE                                  | MAXIMPAD  | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                                                              |            |
|      6 | J3, J6                                                                       |           |     2 | PEC02SAAN                                                    | SULLINS                                     | PEC02SAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                                                                             |            |
|      7 | J4, J5                                                                       |           |     2 | PCC03SAAN                                                    | SULLINS                                     | PCC03SAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                                                              |            |
|      8 | MH1-MH4                                                                      |           |     4 | 9032                                                         | KEYSTONE                                    |           | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                                                        |            |
|      9 | R1                                                                           |           |     1 | LVK12R050DE                                                  | OHMITE MFG CO.                              |           | 0.05 RESISTOR; 1206; 0.05 OHM; 0.5%; 50PPM; 0.5W; METAL FILM                                                                                                                                                          |            |
|     10 | R2-R4                                                                        |           |     3 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00; CR0603AJ/-000ELF | VISHAY;ROHM SEMICONDUCTOR; PANASONIC;BOURNS |           | 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                                                         |            |
|     11 | R5                                                                           |           |     1 | CRG0603F10K                                                  | TE CONNECTIVITY                             | 10K       | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                                     |            |
|     12 | U1                                                                           |           |     1 | MAX49925                                                     | ANALOG DEVICES                              | MAX49925  | EVKIT PART - IC; OZ97; MAX49925; BI-DIRECTIONAL; WIDE POSITIVE AND NEGATIVE SENSING RANGE; CSA WITH PWMREJECTION; PACKAGE OUTLINE: 21- 100346; PACKAGE LAND PATTERN DRAWING: 90-0003; PACKAGE CODE: T1033Y+1C; TDFN10 |            |
|     13 | PCB                                                                          |           |     1 | MAX49925                                                     | ANALOG DEVICES                              | PCB       | PCB:MAX49925                                                                                                                                                                                                          | -          |
|     14 | J1, J2                                                                       | DNP       |     0 | 142138                                                       | AMPHENOL RF                                 | 142138    | HOLE; SMB P.C. MOUNTING JACK;                                                                                                                                                                                         |            |

## Evaluates: MAX4925

## MAX49925 EV Kit PCB Schematics Diagram

<!-- image -->

│

Evaluates: MAX4925

## MAX49925 EV Kit PCB Layout Diagrams

MAX49925 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX49925 EV Kit PCB Layout-Bottom

<!-- image -->

Evaluates: MAX4925

MAX49925 EV Kit PCB Layout-Top

<!-- image -->

MAX49925 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX49925 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                  | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------|-----------------|
|                 0 | 12/21           | Initial Release                                                                              | -               |
|                 1 | 1/23            | Updated board photo                                                                          | 1               |
|                 2 | 2/23            | Updated MAX49925 EV Kit Files table and MAX49925 EV Kit PCB Layout Diagrams (Top Silkscreen) | 1, 6            |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX4925