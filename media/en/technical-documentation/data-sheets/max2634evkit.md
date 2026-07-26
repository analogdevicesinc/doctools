<!-- lastmod 2022-08-02 -->
## MAX2634 Evaluation Kit

## General Description

The  MAX2634  Evaluation  Kit  (EV  Kit)  simplifies  the evaluation of the MAX2634, 315MHz/433MHz low-noise amplifier  for  automotive  RKE.  It  enables  testing  of  the device's  RF  performance  and  require  no  additional supporting  circuitry.  The  EV  Kit  provides  50Ω  SMA connectors for inputs and outputs.

## EV Kit Photo

<!-- image -->

<!-- image -->

## Features

- Easy Evaluation of MAX2634 IC
- 2.2V to 5.5V Single-Supply Operation
- RF Inputs and Outputs Matched to 50Ω
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX2634

## Quick Start

The  MAX2634  EV  Kit  is  fully  assembled  and  factory tested. Follow the instructions in the 'connections and Setup' section to test the devices.

## Required Equipment

This  section  lists  the  recommended  test  equipment  to verify  the  operation  of  the  MAX2634.  The  equipment's listed are intended as suggestions and substitutions are possible:

- MAX2634 EV Kit
- One DC Power Supply capable of delivering 10mA of current from +2.2V to 5.5V
- One Ammeter (optional)
- One RF Signal Generators capable of delivering RF up to 2GHz (Agilent E4433B or equivalent)
- One RF Spectrum Analyzer that covers the MAX2634 operating frequency range (R&amp;S FSEB20 or equivalent)
- One RF Power Meter capable of measuring up to 0dBm at 315MHz and 433MHz (Agilent E4419B or equivalent) and one Power Sensor (HP 346A or equivalent)
- One Noise Figure Meter (optional)
- One noise source (optional)
- One Network Analyzer (optional)

## Connections and Setup

This section is a step-by-step guide to operating the EV Kit and its function.

## Caution: Do not turn on the DC Power or RF signal generators until all connections are completed.

## Checking Power Gain at 315MHz

- 1) With the DC supply output disabled, connect a +3.0V power supply to J1 (VCC\_315) header and the power supply ground to J2 (GND) header of the EV Kit (route the positive terminal of the power supply through an ammeter, if desired).
- 2) Set the jumper of JP1 header to the 'ON' position.
- 3) With the RF signal generator output disabled, connect the generator output to J4 (IN\_315) SMA connector on the EV Kit through an SMA Cable. Set the output of the RF signal generator frequency to 315MHz and power level to -40dBm.
- 4) Connect a spectrum analyzer to J6 (OUT\_315) SMA connector on the EV kit through an SMA Cable. Set

## Evaluates: MAX2634

the spectrum analyzer center frequency to 315MHz, reference level to 0dBm, and span to 1MHz.

- 5) Enable the DC supply output. The supply current should read approximately 2.5mA.
- 6) Enable the RF signal generator output. The spec -trum analyzer should display a tone at 315MHz with power level at approximately -24.5dBm.

## Checking Power Gain at 433MHz

- 1) With the DC supply output disabled, connect a +3.0V power supply to J5 (VCC\_433) header and the power supply ground to J8 (GND) header of the EV Kit (route the positive terminal of the power supply through an ammeter, if desired).
- 2) Set the jumper of JP2 header to the 'ON' position.
- 3) With the RF signal generator output disabled, connect the generator output to J3 (IN\_433) SMA connector on the EV Kit through an SMA Cable. Set the output of the RF signal generator frequency to 433MHz and power level to -40dBm.
- 4) Connect a spectrum analyzer to J7 (OUT\_433) SMA connector on the EV kit through an SMA Cable. Set the spectrum analyzer center frequency to 433MHz, reference level to 0dBm, and span to 1MHz.
- 5) Enable the DC supply output. The supply current should read approximately 2.5mA.
- 6) Enable the RF signal generator output. The spec -trum analyzer should display a tone at 433MHz with power level at approximately -26.5dBm.

## Checking Noise Figure at 315MHz

- 1) With the DC supply output disabled, connect a +3.0V power supply to J1 (VCC\_315) header and the power supply ground to J2 (GND) header of the EV Kit.
- 2) Set the jumper of JP1 header to the 'ON' position.
- 3) Calibrate the noise figure meter per the instructions for that instrument.
- 4) Connect the noise source to J4 (IN\_315) SMA con -nector and J6 (OUT\_315) SMA connector to the noise figure meter using a SMA cable. Note: It is highly recommended to measure noise figure inside a screen room or Faraday enclosure to avoid environmental noise from increasing the noise figure artificially.
- 5) Enable the DC supply output.
- 6) Enable the noise figure measurement. The NF should measure approximately 1.25dB.

## Checking Noise Figure at 433MHz

- 1) With the DC supply output disabled, connect a +3.0V power supply to J5 (VCC\_433) header and the power supply ground to J8 (GND) header of the EV Kit.
- 2) Set the jumper of JP2 header to the 'ON' position.
- 3) Calibrate the noise figure meter per the instructions for that instrument.
- 4) Connect the noise source to J3 (IN\_433) SMA connector and J7 (OUT\_433) SMA connector to the noise figure meter using a SMA cable.
- 5) Enable the DC supply output.
- 6) Enable the noise figure measurement. The NF should measure approximately 1.25dB.

## Performance Table

|   FREQUENCY (MHZ) |   L1 (NH) |   SUPPLY CURRENT (MA) |   GAIN (DB) |   NOISE FIGURE (DB) |   INPUT P1DB (DBM) |   INPUT IP3 (DBM) |
|-------------------|-----------|-----------------------|-------------|---------------------|--------------------|-------------------|
|               308 |        56 |                   2.5 |        15.5 |                1.25 |                -29 |               -16 |
|               315 |        56 |                   2.5 |        15.5 |                1.25 |                -29 |               -16 |
|               418 |        33 |                   2.5 |        13.5 |                1.25 |                -26 |               -12 |
|            433.92 |        33 |                   2.5 |        13.5 |                1.25 |                -26 |               -12 |

## Component Suppliers

| SUPPLIER                                          | WEBSITE                         |
|---------------------------------------------------|---------------------------------|
| AVX                                               | http://www.avx.com/             |
| Murata                                            | http://www.murata.com/          |
| Sullins Electronics Corps.                        | https://www.DigiKey.com/Sullins |
| Johnson Components (Cinch Connectivity Solutions) | https://cinchconnectivity.com/  |

Note: Indicate that you are using the MAX2634 when contacting these component suppliers.

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX2634EVKIT+ | EV Kit |

Evaluates: MAX2634

## Layout Information

A  properly  designed  PCB  is  essential  to  any  RF/micro -wave circuit. Use controlled-impedance lines on

all high-frequency inputs and outputs. Bypass with decou -pling capacitors located close to the device's

VCC  pin.  For  long  VCC  lines,  it  may  be  necessary  to add  additional  decoupling  capacitors.  These  additional capacitors can be located farther away from the device package. Proper grounding of the GND pins is essential. If the PCB uses a topside RF ground, connect it directly to all GND pins. For a board where the ground plane is not on the component layer, the best technique is to con -nect the GND pins to the board with a plated through-hole located close to the package.

## MAX2634 EV Kit Bill of Materials

| LF / RoHS   | Ref Designator                      |   Qty | Value          | Tol   | Description                           | Manufacturer                    | Part Number              | Maxim Supplied   | E#           |
|-------------|-------------------------------------|-------|----------------|-------|---------------------------------------|---------------------------------|--------------------------|------------------|--------------|
| --          | C1, C4, C8, C10, C13, C18, C19, C20 |     0 | Do Not Install |       | 0402 Capacitor                        | Murata                          | Leave Site Open          |                  | --           |
| Y           | C2, C11                             |     2 | 10uF           | 10%   | Tantalum Capacitor, 'R' Case          | AVX                             | TAJR106K006              | X                | EC0629       |
| Y           | C3, C12                             |     2 | 4.7uF          | 10%   | 0805 Capacitor                        | Murata                          | GRM219R61A475K           | X                | ECM0566      |
| Y           | C5, C15                             |     2 | 0.022uF        | 10%   | 0402 Capacitor                        | Murata                          | GRM155R71C223K           | X                | ECM0193      |
| Y           | C6, C17                             |     2 | 100pF          | 5%    | 0402 Capacitor                        | Murata                          | GRM1555C1H101J           | X                | ECM0122      |
| Y           | C7, C16                             |     2 | 0.01uF         | 10%   | 0402 Capacitor                        | Murata                          | GRM155R71C103K           | X                | ECM0510      |
| Y           | R1, R2                              |     2 | 0 ohm          |       | 0402 Resistor                         |                                 | Use Lead-Free Parts Only |                  | ER0504020R00 |
| Y           | L1                                  |     1 | 56nH           | 3%    | 0402 Inductor                         | Murata                          | LQW15AN56NH00            | X                | EL1191       |
| Y           | L2                                  |     1 | 33nH           | 3%    | 0402 Inductor                         | Murata                          | LQW15AN33NH00            | X                | EL0458       |
| Y           | U1, U2                              |     2 | MAX2634        |       | LNA with Shutdown                     | Maxim Integrated Products, Inc. | MAX2634AXT+              | X                | EU02371      |
| Y           | J1, J2, J5, J8                      |     4 | 1X2 Pin Header |       | In-Line Header, 100 mil centers       | Sullins                         | PEC36SAAN                |                  | EH0072       |
| Y           | JP1, JP2                            |     2 | 1X3 Pin Header |       | In-Line Header, 100 mil centers       | Sullins                         | PEC36SAAN                |                  | EH0072       |
| Y           | J3, J4, J6, J7                      |     4 | Connector      |       | SMA End Launch Jack Receptacle 0.062" | Johnson                         | 142-0701-801             |                  | EH0052       |
| Y           | JP1, JP2 Install on Pins 1 and 2    |     2 | Shunt          |       | Shorting Jumper                       | Sullins                         | SSC02SYAN                |                  | EH0071       |
| Y           |                                     |     1 |                |       | MAX2634 Evaluation Kit+ Circuit Board | --                              | --                       |                  | --           |

Evaluates: MAX2634

## MAX2634 EV Kit Schematic

<!-- image -->

## MAX2634 EV Kit PCB Layout Diagrams

MAX2634 EV Kit-Assembly

<!-- image -->

MAX2634 EV Kit-Top Layer

<!-- image -->

## MAX2634 EV Kit PCB Layout Diagrams (continued)

MAX2634 EV Kit-Layer 2

<!-- image -->

MAX2634 EV Kit-Layer 3

<!-- image -->

Evaluates: MAX2634

## MAX2634 EV Kit PCB Layout Diagrams (continued)

MAX2634 EV Kit-Bottom Layer

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates: MAX2634