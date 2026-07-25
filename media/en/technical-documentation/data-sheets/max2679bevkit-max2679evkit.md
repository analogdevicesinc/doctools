<!-- lastmod 2022-08-05 -->
## MAX2679/MAX2679B Evaluation Kits

## General Description

The  MAX2679/MAX2679B  evaluation  kits  (EV  kits) simplify the evaluation of the MAX2679/MAX2679B GPS/ GNSS ultra-low current low-noise amplifier (LNAs). They enable testing of the device's RF performance and require no additional supporting circuitry. The EV kits provide 50Ω SMA connectors for inputs and outputs.

## MAX2679 EV Kit Photo

<!-- image -->

<!-- image -->

Evaluates: MAX2679, MAX2679B

## Benefits and Features

- Easy Evaluation of MAX2679/MAX2679B IC
- 1.08V to 1.98V Single-Supply Operation
- RF Input and Output Matched to 50Ω
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Quick Start

The MAX2679/MAX2679B EV kits are fully assembled and factory tested. Follow the instructions in the Connections and Setup section to test the devices.

## Required Equipment

This  section  lists  the  recommended  test  equipment to  verify  the  operation  of  the  MAX2679/MAX2679B. The equipment's listed are intended as suggestions and substitutions are possible:

- MAX2679/MAX2679B EV kit
- One DC power supply capable of delivering 10mA of current from +1.0V to 2.0V
- One ammeter (optional)
- One RF signal generator capable of producing 1GHz to 2GHz (Agilent E4433B or equivalent)
- One RF spectrum analyzer that covers the MAX2679/ MAX2679B operating frequency range (R&amp;S FSEB20 or equivalent)
- One  RF  power  meter  capable  of  measuring  up  to 0dBm at 1575.42MHz (Agilent E4419B or equivalent) and one power sensor (HP 346A or equivalent)
- One noise figure meter (optional)
- One network analyzer (optional)

## Connections and Setup

This section is a step-by-step guide to operating the EV Kit and its function.

Caution: Do not turn on the DC Power or RF signal generators until all connections are completed.

## Checking Power Gain

- 1) With the DC supply output disabled, connect a +1.8V power  supply  to  the  VCC  header  and  the  power supply ground to the GND header of the EV kit (route the positive terminal of the power supply through an ammeter, if desired).
- 2) Place  a  jumper  between  pins  2  and  3  on  SHDNB (pin 1 closest to the RFOUT SMA port).
- 3) With the RF signal generator output disabled, connect the generator output to the RFIN SMA connector on the EV kit through an SMA Cable. Set the output of the  RF  signal  generator  frequency  to  1575.42MHz and power level to -50dBm.
- 4) Connect  a  spectrum  analyzer  to  the  RFOUT  SMA connector on the EV kit through an SMA Cable. Set the spectrum analyzer center frequency to 1575.42MHz, reference level to 0dBm, and span to 1MHz.

## Evaluates: MAX2679, MAX2679B

- 5) Enable  the  DC  supply  output.  The  supply  current should read approximately 1000µA for MAX2679 EV kit and 650µA for MAX2679B EV Kit.
- 6) Enable the RF signal generator output. The spectrum analyzer should display a tone at 1575.42MHz with power level  at  approximately  -31dBm  for  MAX2679 EV Kit and -34dBm for MAX2679B EV Kit.

## Checking Noise Figure

Note: It is highly recommended to measure noise figure inside a screen room or Faraday enclosure to avoid environmental noise from increasing the noise figure artificially.

- 1) With the DC supply output disabled, connect a +1.8V power  supply  to  the  VCC  header  and  the  power supply ground to the GND header of the EV kit (route the positive terminal of the power supply through an ammeter, if desired.
- 2) Place  a  jumper  between  pins  2  and  3  on  SHDNB (pin 1 closest to the RFOUT SMA port).
- 3) Calibrate the noise figure meter per the instructions for that instrument.
- 4) Connect the noise head to the RFIN SMA connector and the RFOUT SMA to the meter using a SMA cable.
- 5) Enable the DC supply output.
- 6) Enable the noise figure measurement. The MAX2679 EV kit should measure approximately 0.95dB and the MAX2679B should measure approximately 1.03dB.

## Application Information

## Printed Circuit Board (PCB) Design

A properly designed  PCB  is  essential to  any  RF microwave  circuit.  Use  controlled-impedance  lines  on all high frequency inputs and outputs. Bypass VCC with decoupling  capacitors  located  close  to  the  device.  For long  VCC  lines  it  may  be  necessary  to  add  decoupling capacitors.  Locate  these  additional  capacitors  further away from the device package. Proper grounding of the GND bump is essential.  If  the  PCB  uses  a  topside  RF ground, connect it directly to the GND bump. For a board where the ground is not on the component layer, connect the  GND bump to the board with multiple vias close to the package. For general layout guidelines, refer to www. maximintegrated.com/app-notes/index.mvp/id/5100 .

Refer  to  the  MAX2679  EV  kit  schematic,  Gerber  data, PADS layout file, and BOM information for best practices.

## MAX2679/MAX2679B Evaluation Kits

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX2679EVKIT#  | EV Kit |
| MAX2679BEVKIT# | EV Kit |

## MAX2679 EV Kit Bill of Materials

|   ITEM | REF_DES     |   QTY | MFG PART #                                              | MANUFACTURER       | VALUE        | DESCRIPTION                                                                                                              |
|--------|-------------|-------|---------------------------------------------------------|--------------------|--------------|--------------------------------------------------------------------------------------------------------------------------|
|      1 | C2, C8      |     2 | CGA2B3X7R1H104K; C1005X7R1H104K050BB; GRM155R71H104KE14 | TDK; MURATA        | 0.1UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                               |
|      2 | C3          |     1 | TAJC106K016RNJ                                          | AVX                | 10UF         | CAPACITOR; SMT (6032); TANTALUM CHIP; 10UF; 16V; TOL = 10%; MODEL = TAJ SERIES; TG = -55°C TO +125°C                     |
|      3 | C5, C9      |     2 | GRM155R71H102JA01D                                      | MURATA             | 1000PF       | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL = 5%; MODEL = GRM SERIES; TG = -55°C TO +125°C; TC = X7R           |
|      4 | GND         |     1 | 5001                                                    | KEYSTONE           | N/A          | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      5 | L1          |     1 | LQW15AN12NG80                                           | MURATA             | 12NH         | INDUCTOR; SMT (0402); WIREWOUND CHIP; 12NH; TOL = ±2%; 1.24A                                                             |
|      6 | R1          |     1 | CRCW040224K9FKEDHP                                      | VISHAY DALE        | 24.9K        | RESISTOR; 0402; 24.9K OHM; 1%; 100PPM; 0.125W; THICK FILM                                                                |
|      7 | RFIN, RFOUT |     2 | 142-0701-851                                            | JOHNSON COMPONENTS | 142-0701-851 | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                              |
|      8 | SHDNB       |     1 | 800-10-003-10-001000                                    | MILLMAX            | HEADER_3P    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS;                                                       |
|      9 | U1          |     1 | MAX2679                                                 | MAXIM              | MAX2679      | EVKIT PART - IC; MAX2679L; PACKAGE CODE W40A0+1; PACKAGE OUTLINE 21-0480                                                 |
|     10 | VCC         |     1 | 5000                                                    | KEYSTONE           | N/A          | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
|     11 | PCB         |     1 | MAX2679                                                 | MAXIM              | PCB          | PCB:MAX2679                                                                                                              |

TOTAL 14

Evaluates: MAX2679, MAX2679B

## Component Suppliers

| SUPPLIER                                          | WEBSITE                        |
|---------------------------------------------------|--------------------------------|
| AVX                                               | http://www.avx.com/            |
| Murata                                            | http://www.murata.com/         |
| TDK                                               | http://www.tdk.com/            |
| Keystone Electronics                              | http://www.keyelco.com/        |
| Vishay Dale                                       | http://www.vishay.com/         |
| Del-Tron                                          | http://deltron.com/            |
| Johnson Components (Cinch Connectivity Solutions) | https://cinchconnectivity.com/ |
| Mill-Max                                          | https://www.mill-max.com/      |

Note: Indicate that you are using the MAX2769 when contacting these component suppliers.

│

## MAX2679B EV Kit Bill of Materials

|   ITEM | REF_DES     |   QTY | MFG PART #                                              | MANUFACTURER       | VALUE        | DESCRIPTION                                                                                                                |
|--------|-------------|-------|---------------------------------------------------------|--------------------|--------------|----------------------------------------------------------------------------------------------------------------------------|
|      1 | C2, C8      |     2 | CGA2B3X7R1H104K; C1005X7R1H104K050BB; GRM155R71H104KE14 | TDK; MURATA        | 0.1UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                 |
|      2 | C3          |     1 | TAJC106K016RNJ                                          | AVX                | 10UF         | CAPACITOR; SMT (6032); TANTALUM CHIP; 10UF; 16V; TOL = 10%; MODEL = TAJ SERIES; TG = -55°C TO +125°C                       |
|      3 | C5, C9      |     2 | GRM155R71H102JA01D                                      | MURATA             | 1000PF       | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL = 5%; MODEL = GRM SERIES; TG = -55°C TO +125°C; TC = X7R             |
|      4 | GND         |     1 | 5001                                                    | KEYSTONE           | N/A          | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
|      5 | L1          |     1 | LQW15AN13NG80                                           | MURATA             | 13NH         | INDUCTOR; SMT (0402); WIREWOUND CHIP; 13NH; TOL = ± 2%; 1.24A                                                              |
|      6 | R1          |     1 | CRCW040224K9FKEDHP                                      | VISHAY DALE        | 24.9K        | RESISTOR; 0402; 24.9KΩ; 1%; 100PPM; 0.125W; THICK FILM                                                                     |
|      7 | RFIN, RFOUT |     2 | 142-0701-851                                            | JOHNSON COMPONENTS | 142-0701-851 | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                                |
|      8 | SHDNB       |     1 | 800-10-003-10-001000                                    | MILLMAX            | HEADER_3P    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS;                                                         |
|      9 | U1          |     1 | MAX2679BENS+                                            | MAXIM              | MAX2679BENS+ | EVKIT PART - IC; GPS/GNSS ULTRA-LOW CURRENT LOW-NOISE AMPLIFIER; MAX2679B; PACKAGE CODE N40D0+1; PACKAGE OUTLINE 21-100107 |
|     10 | VCC         |     1 | 5000                                                    | KEYSTONE           | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;         |
|     11 | PCB         |     1 | MAX2679B                                                | MAXIM              | PCB          | PCB:MAX2679B                                                                                                               |

TOTAL

14

Evaluates: MAX2679, MAX2679B

## MAX2679 EV Kit Schematic

<!-- image -->

## MAX2679B EV Kit Schematic

<!-- image -->

│

Evaluates: MAX2679, MAX2679B

Evaluates: MAX2679, MAX2679B

## MAX2679/MAX2679B EV Kit PCB Layout Diagrams

MAX2679/MAX2679B EV Kit-Gerber Top Silkscreen

<!-- image -->

│

## MAX2679/ MAX2679B EV Kit PCB Layout Diagrams (continued)

MAX2679/MAX2679B EV Kit-Gerber Top

<!-- image -->

MAX2679/MAX2679B EV Kit-Gerber L2\_GND

<!-- image -->

│

## MAX2679/MAX2679B EV Kit PCB Layout Diagrams (continued)

MAX2679/MAX2679B EV Kit-Gerber L3\_GND

<!-- image -->

MAX2679/MAX2679B EV Kit-Gerber Bottom

<!-- image -->

│

## MAX2679/MAX2679B EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX2679/MAX2679B EV Kit-Gerber Silk\_Bottom

Evaluates: MAX2679, MAX2679B

## MAX2679/MAX2679B EV Kit PCB Layout Diagrams (continued)

MAX2679/MAX2679B EV Kit-Assembly Top

<!-- image -->

│

## MAX2679/MAX2679B Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

©

Evaluates: MAX2679, MAX2679B