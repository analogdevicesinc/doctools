<!-- lastmod 2022-08-02 -->
## MAX2771 Evaluation Kit

## General Description

The MAX2771 evaluation kit (EV kit) simplifies evaluation of  the  MAX2771,  a  next-generation  Global  Navigation Satellite System (GNSS) receiver covering the L1, L2, L5, E1, E5, E6, B1, B2, and B3 bands, as well as the GPS, GLONASS, Galileo, QZSS, IRNSS, and BeiDou navigation satellite  systems  on  a  single  chip.  It  enables  testing  of device  performance  and  requires  no  additional  support circuitry. Standard 50Ω SMA connectors are included on the EV kit for the inputs and outputs to allow for quick and easy evaluation on the test bench.

The  MAX2771  EV  kit  contains  a  microcontroller  (MCU) that translates between the three-wire SPI interface and USB to allow the user to configure internal registers and modes  with  Graphical  User  Interface  (GUI)  software running on a PC. The EV kit is fully assembled and tested at the factory.

This  document  provides  a  component  list,  a  list  of equipment required to evaluate the device, a straightforward test procedure to verify functionality, a description of the EV kit circuit, the circuit schematic, and artwork for each layer of the printed circuit board (PCB).

## Features

- Easy Evaluation of the MAX2771 IC
- +2.7V to +3.3V Single-Supply Operation
- 50Ω SMA Connectors on the RF and Baseband Input and Outputs
- All Critical Peripheral Components Included
- Micro-USB Port for Interfacing with PC

Evaluates: MAX2771

## Quick Start

## Required Equipment

This  section  lists  the  recommended  test  equipment  to verify operation of the MAX2771. It is intended as a guide only and some substitutions are possible.

- One RF signal generator capable of delivering minimum -120dBm up to 3.0GHz (Keysight N5182B or equivalent)
- An RF spectrum analyzer with a range of 100kHz to 3.0GHz (Keysight N9020A or equivalent)
- A power supply capable of up to 1A at +2.7V to +6V
- One Digital multi-meter for measuring the supply current (Keysight 34461A or equivalent) (optional)
- 50Ω coaxial RF cable with SMA connectors
- A network analyzer (e.g., HP 8753D or equivalent) to measure small-signal return loss (optional)
- A dual power supply capable of delivering up to 1A at ±5V
- A user-supplied Windows-based PC
- Oscilloscope or logic analyzer to measure digital outputs(optional)

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX2771 Evaluation Kit

## Procedure

This  section  provides  a  step-by-step  guide  to  operating the EV kit and testing the device functions.

## Caution: Do not turn on the DC power or RF signal generators until all connections are completed.

The  MAX2771  EV  kit  includes  two  on-board  MAX8510 linear regulators for powering up the MAX2771 device to a regulated supply voltage of +2.85V. When using the linear regulators, connect pins 1-2 of headers J15 and J16. The MAX2771 can also be powered directly through an external power supply connected to pin 2 of these headers. Pin 1 of these 3-pin headers is marked with a dot on the silkscreen.

## Download the MAX2771 EV Kit Software

- Download the MAX2771 EV kit software from the Maxim Integrated website, run the installation file, and install it.
- Start running the GUI program.

## Powering the EV Kit

- Connect the PC to the on board MAX32625 PICO microcontroller module on the EV kit using the provided USB cable. The GUI should indicate EV kit connected in the status log.
- Connect a DC supply set to +3V (through an ammeter if desired) to headers J13 and ground J14 on the EV kit. Do not turn on the supply. When using the on-board linear regulators to power the MAX2771, connect pins 1-2 of headers J15 and J16.
- Connect a DC supply set to +5V to header J28 on the EV kit. Connect a DC supply set to -5V to header J29 on the EV kit. Do not turn on the supply. Connect the ground to J25.
- Make sure that headers J17- J24 are shorted for proper supply connection to the MAX2771.
- Turn on the power supplies, the digital multimeter should read around 20mA of current.

Evaluates: MAX2771

## High-Band Connections

- Set the RF signal generator to 1575.42MHz, -110dBm power. Do not turn on the generator's output. Connect the RF signal generator to the LNA\_ HI\_IN input (J4) using a coaxial RF cable with SMA connectors.
- Connect LNA\_HI\_OUT SMA connector (J5) to the MIX\_HI\_IN SMA connector (J6) on the EV kit using a short coaxial RF cable with SMA connectors.
- In the GUI's Streaming and Registers tab, write 0xBEA41603 to the register at address 0x0 and write 0x00C00002 to the register at address 0x9.
- Connect the output of the MAX4444 buffer, I\_OUT\_ ANA (J10) on the EV kit to a spectrum analyzer using a coaxial RF cable with SMA connectors.
- In the GUI's Receiver, IF and AGC tab (make sure Auto Update is ON),
- -Select Filter type as bandpass filter.
- -Select Filter Order to 5th Order Butterworth option.
- -Select filter Bandwidth to 2.5MHz.
- -Select GAIN set from GAININ.
- -Select ADC Bypass mode in Output Driver Configuration.
- Turn on the RF signal generator output and observe the output in Signal analyzer at 4.092MHz. See Figure 1 below.
- Set the Driver Configuration to CMOS logic to observe the ADC digital output at J26 header pins. ADC Output Bit and Data format can be selected accordingly from GUI. See Figure 2 .

Figure 1. Spectrum of IF Signal within the Filter response (High Band)

<!-- image -->

Figure 2. ADC Outputs on Oscilloscope

<!-- image -->

## MAX2771 Evaluation Kit

## Low-Band Connections

- Set the RF signal generator to 1176.45MHz, -110dBm power. Do not turn on the generator's output. Connect the RF signal generator to the LNA\_ LO\_IN input (J1) using a coaxial RF cable with SMA connectors.
- Connect LNA\_LO\_OUT SMA connector (J2) to the MIX\_LO\_IN SMA connector (J3) on the EV kit using a coaxial RF cable with SMA connectors.
- Connect the output of the MAX4444 buffer, I\_OUT\_ ANA (J10) on the EV kit to a spectrum analyzer using coaxial RF cable with SMA connectors.
- In the GUI's Streaming and Registers tab, write 0xBEA41603 to the register at address 0x0 and write 0x00C00002 to the register at address 0x9.
- In the GUI's Receiver, PLL and Clock tab (make sure Auto Update is on),
- -Select L2/L5band.
- -Select Fractional PLL Mode in PLL Control Mode.
- -Set Reference division ratio to 3 and input LO Frequency to 1173.3333MHz.
- -Check for the Lock detect button to go green.
- In the GUI's Receiver IF and AGC tab,
- -Select 'LNA\_LO is Active' in LNA Mode field.
- -Select Mixer Mode as 'Enable Low Band'
- -Select Filter type as bandpass filter.

## Component Suppliers

| SUPPLIER                  | WEBSITE        |
|---------------------------|----------------|
| Murata Mfg. Co., Ltd.     | www.murata.com |
| Rakon Ltd.                | www.rakon.com  |
| Yageo Corporation         | www.yageo.com  |
| Kemet Electronics Pvt Ltd | www.kemet.com/ |

Note: Indicate that you are using the MAX2771 when contact -

ing these component suppliers.

## Evaluates: MAX2771

- -Select Filter Order to 5th Order Butterworth option.
- -Select filter Bandwidth to 2.5MHz.
- -Update Centre Frequency bits with value 1100000.
- -Select GAIN set from GAININ in AGC mode
- -Select ADC Bypass mode in Output Driver Configuration.
- Turn on the RF signal generator output and observe the output in Signal analyzer at 3.11MHz.
- Set the Driver Configuration to CMOS logic to observe the ADC digital output at J26 header pins.

## Layout Issues

A good PCB is an essential part of an RF circuit design. The  EV  kit  PCB  can  serve  as  a  guide  for  laying  out  a board  using  the  MAX2771.  Keep  traces  carrying  RF signals  as  short  as  possible  to  minimize  radiation  and insertion  loss.  Use  impedance  control  on  all  RF  signal traces. The exposed paddle must be soldered evenly to the board's ground plane for proper operation. Use abundant vias beneath the exposed paddle and between RF traces  to  minimize  undesired  RF  coupling.  To  minimize coupling between different sections of the IC, each VCC pin must have a bypass capacitor with low impedance to the  closest  ground  at  the  frequency  of  interest.  Do  not share  ground  vias  among  multiple  connections  to  the PCB ground plane. Refer to the Layout Issues section of the MAX2771 IC data sheet for more information

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX2771EVKIT# | EV Kit |

# Denotes RoHS-compliant

## MAX2771 EV Kit Bill of Materials

|   ITEM | REF_DES                                            | DNI/DNP   |   QTY | MFG PART #                                                                              | MANUFACTURER                                        | VALUE        | DESCRIPTION                                                                                         | COMMENTS   |
|--------|----------------------------------------------------|-----------|-------|-----------------------------------------------------------------------------------------|-----------------------------------------------------|--------------|-----------------------------------------------------------------------------------------------------|------------|
|      1 | C1-C3                                              | -         |     3 | TAJB106K016R; T494B106K016A                                                             | AVX;AVX                                             | 10UF         | CAPACITOR; SMT (3528); TANTALUM CHIP; 10UF; 16V; TOL=10%                                            |            |
|      2 | C4, C6, C7                                         | -         |     3 | C0402C682K5RAC; GRM155R71H682KA88                                                       | KEMET;MURATA                                        | 6800PF       | CAPACITOR; SMT (0402); CERAMIC CHIP; 6800PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R         |            |
|      3 | C8-C17, C64                                        | -         |    11 | C0402C101J5GAC; NMC0402NPO101J; CC0402JRNPO9BN101; GRM1555C1H101JA01; C1005C0G1H101J050 | KEMET;NIC COMPONENTS CORP.;YAGEO PHICOMP;MURATA;TDK | 100PF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=- 55 DEGC TO +125 DEGC; TC=C0G          |            |
|      4 | C18-C25, C48-C51, C54- C57, C60-C63                | -         |    20 | C0402C104J4RAC                                                                          | KEMET                                               | 0.1UF        | CAPACITOR; SMT; 0402; CERAMIC; 0.1uF; 16V; 5%; X7R; -55degC to + 125degC; 0 +/-15% degC MAX.        |            |
|      5 | C26-C31                                            | -         |     6 | NMC0402X7R103K16TRP; GRM155R71C103KA01; CC0402KRX7R7BB103                               | NIC COMPONENTS CORP.; MURATA;YAGEO                  | 0.01UF       | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R |            |
|      6 | C33                                                | -         |     1 | C0402C0G500-150JNP; GRM1555C1H150JA01                                                   | VENKEL LTD.;MURATA                                  | 15PF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 15PF; 50V; TOL=5%; TG=- 55 DEGC TO +125 DEGC; TC=C0G           |            |
|      7 | C34                                                | -         |     1 | CC0402KRX7R9BB751                                                                       | YAGEO                                               | 750PF        | CAP; SMT (0402); 750PF; 10%; 50V; X7R; CERAMIC CHIP                                                 |            |
|      8 | C39, C40                                           | -         |     2 | C0402C100J5GAC; GRM1555C1H100JA01                                                       | KEMET;MURATA                                        | 10PF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 10PF; 50V; TOL=5%; TG=- 55 DEGC TO +125 DEGC; TC=C0G           |            |
|      9 | C41-C45                                            | -         |     5 | C0402C105K8PAC                                                                          | KEMET                                               | 1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; TG=- 55 DEGC TO +85 DEGC; TC=X5R            |            |
|     10 | C65                                                | -         |     1 | GRM1554C1E1R1CA01                                                                       | MURATA                                              | 1.1PF        | CAP; SMT (0402); 1.1PF; +/-0.25PF; 25V; JIS; CERAMIC CHIP ;                                         |            |
|     11 | C66                                                | -         |     1 | GJM1555C1H1R7WB01                                                                       | MURATA                                              | 1.7PF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 1.7PF; 50V; TOL=0.05PF; TG=-55 DEGC TO +125 DEGC; TC=C0G       |            |
|     12 | J1-J4, J10-J12                                     | -         |     7 | 142-0701-801                                                                            | JOHNSON COMPONENTS                                  | 142-0701-801 | CONNECTOR; FEMALE; BOARDMOUNT; END LAUNCH JACK RECEPTACLE- ROUND CONTACT; STRAIGHT; 2PINS           |            |
|     13 | J5-J9                                              | -         |     5 | 142-0701-201                                                                            | JOHNSON COMPONENTS                                  | 142-0701-201 | CONNECTOR; FEMALE THREADED; THROUGH HOLE; SMA; STRAIGHT THROUGH; 5PINS                              |            |
|     14 | J13, J14, J17-J25, J28, J29                        | -         |    13 | PEC02SAAN                                                                               | SULLINS                                             | PEC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                           |            |
|     15 | J15, J16, J27                                      | -         |     3 | PEC03SAAN                                                                               | SULLINS                                             | PEC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                           |            |
|     16 | J26                                                | -         |     1 | PEC05DAAN                                                                               | SULLINS ELECTRONICS CORP.                           | PEC05DAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 10PINS; - 65 DEGC TO +125 DEGC                  |            |
|     17 | L1                                                 | -         |     1 | LQW18AN8N4C80                                                                           | MURATA                                              | 8.4NH        | INDUCTOR; SMT (0603); WIREWOUND; 8.4NH; 0.2NH; 1.6A ;                                               |            |
|     18 | L2                                                 | -         |     1 | LQW18AN5N6C80                                                                           | MURATA                                              | 5.6NH        | INDUCTOR; SMT (0603); WIREWOUND; 5.6NH; 0.2NH; 1.9A ;                                               |            |
|     19 | R1, R2, R14, R29, R30, R33- R40, R42, R43, R46-R57 | -         |    27 | RC0402JR-070RL; CR0402-16W-000RJT                                                       | YAGEO PHYCOMP; VENKEL LTD.                          |              | 0 RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                             |            |
|     20 | R9, R12, R20, R24                                  | -         |     4 | RC1608J000CS; CR0603-J/-000ELF;RC0603JR- 070RL                                          | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH                |              | 0 RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                              |            |
|     21 | R60                                                | -         |     1 | CR0402-16W-22R1FT                                                                       | VENKEL LTD.                                         |              | 22.1 RESISTOR; 0402; 22.1 OHM; 1%; 100PPM; 0.063W; THICK FILM                                       |            |
|     22 | R61                                                | -         |     1 | ERJ-2GEJ153                                                                             | PANASONIC                                           | 15K          | RESISTOR; 0402; 15K OHM; 5%; 200PPM; 0.1W; THICK FILM                                               |            |
|     23 | R62, R67, R68                                      | -         |     3 | ERJ-2GEJ203X                                                                            | PANASONIC                                           |              | RESISTOR; 0402; 20K OHM; 5%; 200PPM; 0.10W; THICK FILM                                              |            |
|     24 | R66, R75, R76                                      | -         |     3 | CR0402-16W-47R5FT; CRCW040247R5FK                                                       | VENKEL LTD.;VISHAY                                  | 20K          | 47.5 RESISTOR; 0402; 47.5 OHM; 1%; 100PPM; 0.063W; THICK FILM                                       |            |

## MAX2771 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                                  | DNI/DNP   |   QTY | MFG PART #                                                | MANUFACTURER                       | VALUE           | DESCRIPTION                                                                                                                               | COMMENTS   |
|--------|----------------------------------------------------------|-----------|-------|-----------------------------------------------------------|------------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|------------|
|     25 | SU15-SU24                                                | -         |    10 | STC02SYAN                                                 | SULLINS ELECTRONICS CORP.          | STC02SYAN       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                   |            |
|     26 | TP1-TP3                                                  | -         |     3 | 5000                                                      | KEYSTONE                           | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                          |            |
|     27 | U1                                                       | -         |     1 | MAX2771ETI+                                               | MAXIM                              | MAX2771ETI+     | EVKIT PART-IC; UNIVERSAL GNSS RECEIVER; TQFN28-EP; PACKAGE OUTLINE DRAWING: 21-0140; PACKAGE CODE: T2855+3; PACKAGE LAND PATTERN; 90-0023 |            |
|     28 | U6, U7                                                   | -         |     2 | MAX8510EXK29+                                             | MAXIM                              | MAX8510EXK29+   | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW-DROPOUT; 0.12A LINEAR REGULATOR; SC70-5                                                         |            |
|     29 | U8-U10                                                   | -         |     3 | MAX4444ESE+                                               | MAXIM                              | MAX4444ESE      | IC; DLRX; ULTRA-HIGH-SPEED; LOW-DISTORTION; DIFFERENTIAL-TO- SINGLE-ENDED LINE RECEIVERS WITH ENABLE                                      |            |
|     30 | U11                                                      | -         |     1 | MAX32625PICO                                              | MAXIM                              | MAX32625PICO    | MODULE; BOARD; MAX32625PICO BOARD DESIGN FOR MAX32625 ARM CORTEX-M4F; BOARD; LAMINATED PLASTIC WITH COPPER CLAD;                          |            |
|     31 | Y1                                                       | -         |     1 | IT3200C_16.368MHZ                                         | RAKON                              | 16.368MHZ       | EVKIT PART -CRYSTAL; SMT 3.2MMX 2.5 MM; 10PF; 16.368MHZ; +/- 1PPM; +/-0.5PPM TO +/-5PPM                                                   |            |
|     32 | PCB                                                      | -         |     1 | MAX2771                                                   | MAXIM                              | PCB             | PCB:MAX2771                                                                                                                               | -          |
|     33 | C5                                                       | DNP       |     0 | C0402C682K5RAC; GRM155R71H682KA88                         | KEMET;MURATA                       | 6800PF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 6800PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                               |            |
|     34 | C32                                                      | DNP       |     0 | NMC0402X7R103K16TRP; GRM155R71C103KA01; CC0402KRX7R7BB103 | NIC COMPONENTS CORP.; MURATA;YAGEO | 0.01UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                       |            |
|     35 | C35-C38                                                  | DNP       |     0 | C0402C100J5GAC; GRM1555C1H100JA01                         | KEMET;MURATA                       | 10PF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 10PF; 50V; TOL=5%; TG=- 55 DEGC TO +125 DEGC; TC=C0G                                                 |            |
|     36 | C46, C47, C52, C53, C58, C59                             | DNP       |     0 | C0402C104J4RAC                                            | KEMET                              | 0.1UF           | CAPACITOR; SMT; 0402; CERAMIC; 0.1uF; 16V; 5%; X7R; -55degC to + 125degC; 0 +/-15% degC MAX.                                              |            |
|     37 | R6, R7, R15, R22, R28, R31, R32, R41, R44, R45, R58, R59 | DNP       |     0 | RC0402JR-070RL; CR0402-16W-000RJT                         | YAGEO PHYCOMP; VENKEL LTD.         |                 | 0 RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                                   |            |
|     38 | R26, R27                                                 | DNP       |     0 | CRCW040249R9FK; RK73H1ETTP49R9F                           | VISHAY DALE;KOA SPEER              |                 | 49.9 RESISTOR; 0402; 49.9 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                            |            |
|     39 | R63, R64, R69, R70, R72, R73                             | DNP       |     0 | CRCW04021K00FK; RC0402FR-071KL                            | VISHAY DALE;YAGEO PHICOMP          | 1K              | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                       |            |
|     40 | R65, R71, R74                                            | DNP       |     0 | CRCW0402200RFK                                            | VISHAY DALE                        |                 | 200 RESISTOR; 0402; 200 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                               |            |
|     41 | T1-T3                                                    | DNP       |     0 | ADTT4-1+                                                  | MINI-CIRCUITS                      | ADTT4-1+        | EVKIT PART -TRANSFORMER; SMT; 0.2-120MHZ; SURFACE MOUNT RF TRANSFORMER                                                                    |            |
|     42 | U2, U3                                                   | DNP       |     0 | SF2208E                                                   | MURATA                             | SF2208E         | EVKIT PART-FILTER; SAW; SAW FILTER; SMD; 1227MHZ                                                                                          |            |
|     43 | U4, U5                                                   | DNP       |     0 | SAFFB1G57KE0F0A                                           | MURATA                             | SAFFB1G57KE0F0A | FILTER; SAW; HI-FREQUENCY CERAMIC SOLUTION; SMT; 1575.4MHZ                                                                                |            |
|     44 | Y2                                                       | DNP       |     0 | RSX-5_16.368MHZ                                           | RAKON                              | 16.368MHZ       | EVKIT PART -CRYSTAL; SMT 5X3.2; 5PF TO 50PF; 16.368MHZ; +/- 5PPM TO +/-25PPM; +/-5PPM TO +/-50PPM                                         |            |
|     45 | R8, R10, R11, R13, R19, R21, R23, R25                    | DNP       |     0 | N/A                                                       | N/A                                | OPEN            | PACKAGE OUTLINE 0603 RESISTOR                                                                                                             |            |

Evaluates: MAX2771

## MAX2771 EV Kit Schematics

Evaluates: MAX2771

<!-- image -->

## MAX2771 EV Kit PCB Layout Diagrams

MAX2771 EV Kit-Top Silkscreen

<!-- image -->

Evaluates: MAX2771

MAX2771 EV Kit-Top

<!-- image -->

│

## MAX2771 EV Kit PCB Layout Diagrams (continued)

MAX2771 EV Kit-Level 2 GND

<!-- image -->

MAX2771 EV Kit-Level 3 PWR

<!-- image -->

│

## MAX2771 EV Kit PCB Layout Diagrams (continued)

MAX2771 EV Kit-Bottom

<!-- image -->

MAX2771 EV Kit-Bottom Silkscreen

<!-- image -->

Evaluates: MAX2771

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/18            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX2771