<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX9517/MAX9524 Evaluation Kits

## General Description

The MAX9517/MAX9524 evaluation kits (EV kits) are fully  assembled and tested surface-mount PCBs that evaluate the MAX9517 and the MAX9524 ICs. Both ICs filter,  amplify,  and  set  the  sync-tip  level  for  standarddefinition video signals.

The ICs feature an internal reconstruction filter that has 40dB attenuation at 27MHz, and ±1dB passband flatness at 7MHz. The MAX9517 and MAX9524 have a 2V/V gain and are capable of driving 75 Ω to  ground. The ICs feature two analog switches that are used to route audio, video, or digital signals.

Video signals are DC-coupled to the input of the MAX9517 and AC-coupled to the input of the MAX9524. The MAX9524 features an input sync-tip clamp to set the DC level for the video signal. The EV kits' input terminal has 75 Ω termination to ground. The EV kits' output has a 75 Ω back-termination resistor. The EV kits operate from a single 2.7V to 3.6V power supply.

## Part Selection Table

| PART        | INPUT COUPLING         | OUTPUT COUPLING   |
|-------------|------------------------|-------------------|
| MAX9517ATC+ | DC                     | DC                |
| MAX9524ATC+ | AC with sync-tip clamp | DC                |

| DESIGNATION                   |   QTY | DESCRIPTION                                                        |
|-------------------------------|-------|--------------------------------------------------------------------|
| C1                            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J106M |
| C2                            |     1 | 0.1µF ±10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E104K    |
| C3                            |     1 | See the EV Kit-Specific Component List                             |
| COM1, COM2, IN, NO1, NO2, OUT |     6 | 75 Ω BNC PCB mount connectors                                      |
| JU1, JU2, JU3                 |     3 | 3-pin headers                                                      |
| R1, R2                        |     2 | 75 Ω ±1% resistors (0603)                                          |
| R3                            |     1 | See the EV Kit-Specific Component List                             |
| R4-R7                         |     0 | Not installed, resistors (0603)                                    |
| U1                            |     1 | See the EV Kit-Specific Component List                             |
| -                             |     3 | Shunts                                                             |
| -                             |     1 | PCB: MAX9517/MAX9524 Evaluation Kits+                              |

## Features

- ♦ Single 2.7V to 3.6V Supply Operation
- ♦ DC-Coupled Input (MAX9517)
- ♦ AC-Coupled Input with Sync-Tip Clamp (MAX9524)
- ♦ ±1dB Passband at 7MHz Reconstruction Filter with 40dB Attenuation at 27MHz
- ♦ Preset Gain of 2V/V
- ♦ Drives 75Ω to Ground
- ♦ Small 12-Pin Thin QFN Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE                   | IC PACKAGE     |
|---------------|------------------------------|----------------|
| 0°C to +70°C* | 12 Thin QFN-EP** (3mm x 3mm) | MAX9517EVKIT + |
| 0°C to +70°C* | 12 Thin QFN-EP** (3mm x 3mm) | MAX9524EVKIT + |

## Component List

## EV Kit-Specific Component List

| EV KIT        | REFERENCE DESIGNATOR   | DESCRIPTION                                                      |
|---------------|------------------------|------------------------------------------------------------------|
| MAX9517EVKIT+ | C3                     | Not installed, capacitor (0603)                                  |
| MAX9517EVKIT+ | R3                     | 0 Ω ±5% resistor (0603)                                          |
| MAX9517EVKIT+ | U1                     | MAX9517ATC+ (12-pin, 3mm x 3mm Thin QFN with EP)                 |
| MAX9524EVKIT+ | C3                     | 0.1µF ±10%, 25V X7R, ceramic capacitor (0603) TDK C1608X7R1E104K |
| MAX9524EVKIT+ | R3                     | Not installed, resistor (0603)                                   |
| MAX9524EVKIT+ | U1                     | MAX9524ATC+ (12-pin, 3mm x 3mm Thin QFN with EP)                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9517/MAX9524 Evaluation Kits

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com        |
| TDK Corp.             | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9517 or MAX9524 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- 2.7V to 3.6V, 500mA DC power supply (VDD)
- Video signal generator
- Video measurement equipment (e.g., Tektronix VM700T)

## Procedure

Each EV kit is a fully assembled and tested surfacemount PCB. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  a  shunt  is  installed  across  pins  1-2  of jumper JU1 (EV Kit ON).
- 2) Connect the power-supply ground to the GND pad on the EV kit.
- 3) Connect the 2.7V to 3.6V power supply to the VDD pad on the EV kit.
- 4) Connect the output of the video signal generator to the  IN  BNC connector on the EV kit. Note: For the MAX9517, the video signal must be biased such that the sync tip is at ground.
- 5) Connect the OUT BNC connector on the EV kit to the input of the video measurement equipment.
- 6) Set the video signal generator for the desired video input  signal,  such  as  multiburst  sweep.  This  signal must contain sync information.
- 7) Turn on the power supply and enable the video signal generator.
- 8) Analyze the video output signal with the VM-700T video measurement equipment.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description

Each EV kit is a fully assembled and tested PCB that contains all the components necessary to evaluate the performance of the MAX9517 or the MAX9524. Both ICs filter and amplify standard-definition video signals.

The MAX9517/MAX9524 ICs feature an internal reconstruction filter that has 40dB attenuation at 27MHz and ±1dB passband flatness at 7MHz. The MAX9517 and MAX9524 have 2V/V gain and are capable of driving a 75 Ω load to ground. Both ICs include two analog switches that can be used to route audio, video, or digital signals.

The MAX9517 EV kit can be modified to evaluate the MAX9524 by installing capacitor C3, removing resistor R3,  and  replacing  U1.  See  the  EV-Kit  Specific Component List for component values.

Similarly, the MAX9524 EV kit can be modified to evaluate the MAX9517 by removing capacitor C3, installing resistor R3, and replacing U1. See the EV-Kit Specific Component List for component values.

## Jumper Selection

## Shutdown Mode (SHDN)

Jumper JU1 controls the shutdown mode ( SHDN ) of the MAX9517 or MAX9524 ICs. The shutdown mode reduces the IC's quiescent current. See Table 1 for shunt positions.

## Table 1. JU1 Jumper Selection ( SHDN )

| SHUNT POSITION   | SHDN PIN   | EV KIT FUNCTION   |
|------------------|------------|-------------------|
| 1-2*             | High       | Enabled           |
| 2-3              | Low        | Disabled          |

<!-- image -->

## MAX9517/MAX9524 Evaluation Kits

## Analog Switch Control (IN1)

The ICs feature a logic input, IN1, to control analog switch 1. Jumper JU2 on the EV kit controls analog switch 1. Table 2 lists the selectable jumper options.

Table 2. JU2 Jumper Selection (IN1)

| SHUNT POSITION   | IN1 CONNECTED TO              | ANALOG SWITCH 1                                | EV KIT FUNCTION                                                        |
|------------------|-------------------------------|------------------------------------------------|------------------------------------------------------------------------|
| 1-2              | VDD                           | On                                             | NO1 connected to COM1                                                  |
| 2-3              | GND                           | Off                                            | NO1 not connected to COM1                                              |
| None             | External logic control source | Controlled by an external logic control source | Logic-high: NO1 connected to COM1 Logic-low: NO1 not connected to COM1 |

Table 3. JU3 Jumper Selection (IN2)

| SHUNT POSITION   | IN2 CONNECTED TO              | ANALOG SWITCH 2                                | EV KIT FUNCTION                                                        |
|------------------|-------------------------------|------------------------------------------------|------------------------------------------------------------------------|
| 1-2              | VDD                           | On                                             | NO2 connected to COM2                                                  |
| 2-3              | GND                           | Off                                            | NO2 not connected to COM2                                              |
| None             | External logic control source | Controlled by an external logic control source | Logic-high: NO2 connected to COM2 Logic-low: NO2 not connected to COM2 |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Analog Switch Control (IN2)

The ICs feature a logic input, IN2, to control analog switch 2. Jumper JU3 on the EV kit controls analog switch 2. Table 3 lists the selectable jumper options.

## MAX9517/MAX9524 Evaluation Kits

Figure 1. MAX9517 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9517/MAX9524 Evaluation Kits

<!-- image -->

Figure 2. MAX9524 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9517/MAX9524 Evaluation Kits

<!-- image -->

Figure 3. MAX9517/MAX9524 EV Kit Component Placement Guide-Component Side

Figure 4. MAX9517/MAX9524 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX9517/MAX9524 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 6 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Boblet