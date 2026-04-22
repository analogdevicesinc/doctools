<!-- lastmod 2023-09-25 -->
## QSH4218-x-10k Hardware Manual

Hardware Version V1.00 | Document Revision V1.50 • 24.04.2023

QSH4218-x-10k is a NEMA17 (42mm) 2-phase stepper motor including a small size optical incremental encoder kit. It comes with a resolution of 625 lines (40000 counts). Trinamic's Stepper motors are quality motors for universal use. They feature a long life due to ball bearings and no wearing out parts.

<!-- image -->

- Stepper Motor Servo · Precision Motion Control

## Applications

## Simpli/uniFB01ed Block Diagram

<!-- image -->

©2023 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com

<!-- image -->

<!-- image -->

- Position Monitoring
- Automated Equipment

## Features

- High Resolution
- Low Cost
- Small Dimension
- Easy Mounting
- Robotics

## Contents

| 1 Order Codes   | 1 Order Codes                                                                                                | 1 Order Codes                                                                                                                             | 3     |
|-----------------|--------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|-------|
| 2               | Motor Speci/uniFB01cations and Characteristics 2.1 Technical Parameters .                                    | Motor Speci/uniFB01cations and Characteristics 2.1 Technical Parameters .                                                                 | 4     |
|                 |                                                                                                              | and Mechanical . . . . . . . . . . . . . Torque-Speed Diagrams . . . . . . . .                                                            | 4 5   |
|                 | 2.2                                                                                                          | . . . . . . . . . . . . . . 2.2.1                                                                                                         |       |
|                 |                                                                                                              | QSH4218-35-10-027-10k . . . . . . . . . . . . . . . . . QSH4218-51-10-049-10k                                                             | 5     |
|                 | 2.2.2                                                                                                        | . . . . . . . . . . . . . . . . .                                                                                                         | 6     |
| 3               | Technical Speci/uniFB01cations of the Encoders . . . . . . .                                                 | Technical Speci/uniFB01cations of the Encoders . . . . . . .                                                                              | 6 6   |
|                 | 3.1 Electrical Encoder Parameters 3.2 Mechanical Encoder                                                     | . . . . . . . . . . .                                                                                                                     |       |
|                 |                                                                                                              | Parameters . . . . . . . . . . . . . . . .                                                                                                | 7     |
|                 | 3.3                                                                                                          | . Environmental Encoder Parameters . . . . . . . . . . . . . . .                                                                          | 7     |
| 4               | Connectors and Signals 4.1 Motor Connector . . . .                                                           | Connectors and Signals 4.1 Motor Connector . . . .                                                                                        | 7     |
|                 | . . . . . . . . .                                                                                            | . . . . . . . . . . . . . . . . . . .                                                                                                     | 7     |
|                 | 4.2 4.3                                                                                                      | Encoder Connector . . . . . . . . . . . . . . . . . . .                                                                                   | 8     |
|                 | Wave                                                                                                         | Form . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                          | 9     |
| 5               | Mechanical Drawings                                                                                          | Mechanical Drawings                                                                                                                       | 10    |
| 6               | Considerations for Operation                                                                                 | Considerations for Operation                                                                                                              | 11 11 |
|                 | 6.1 Choosing the best Fitting Motor for an Application . . . 6.1.1 Determining the Maximum Torque Required . | . . .                                                                                                                                     |       |
|                 |                                                                                                              | . . . Motor Current Settings . . . . . . . . . . . . . . . . . . .                                                                        | 11 11 |
|                 | 6.2                                                                                                          | . . . .                                                                                                                                   | 12    |
|                 |                                                                                                              | 6.2.1 Choosing the Optimum Current Setting . . . . . . . . 6.2.2 . .                                                                      | 12    |
|                 | 6.3                                                                                                          | Choosing the Standby Current Setting . . . . . . Motor Driver Supply Voltage . . . . . . . . . . .                                        | 13    |
|                 |                                                                                                              |                                                                                                                                           | 13    |
|                 | 6.3.1 Back                                                                                                   | . . . . . . . . Determining if the Given Driver Voltage is Su/uniFB03cient EMF (BEMF) . . . . . . . . . . . . . . . . . . . . . . . . . . | 14    |
|                 | 6.4 6.5                                                                                                      |                                                                                                                                           | 14    |
|                 |                                                                                                              | Choosing the Commutation Scheme . . . . . . . . . . . . . . . Fullstepping . . . . . . . . . . . . .                                      |       |
|                 | 6.5.1                                                                                                        | . . . . . . . . . . .                                                                                                                     | 15    |
| 7               | Figures Index                                                                                                | Figures Index                                                                                                                             | 16    |
| 8               | Tables Index                                                                                                 | Tables Index                                                                                                                              | 17    |
| 9               | Supplemental Directives 9.1                                                                                  | Supplemental Directives 9.1                                                                                                               | 18 18 |
|                 | Producer Information Copyright . . . . . . .                                                                 | . . . . . . . . . . . . . . . . . . . . . . .                                                                                             |       |
|                 | 9.2                                                                                                          | . . . . . . . . . . . . . .                                                                                                               | 18 18 |
|                 | 9.3                                                                                                          | . . . . . . . . . . Trademark Designations and Symbols . . . . . . . . . . . . . . Target User . . . . . . . . . . . . . . .              | 18    |
|                 | 9.4                                                                                                          | . . . . . . . . . . . . . . Disclaimer:                                                                                                   | 18    |
|                 | 9.5                                                                                                          | Life Support Systems . . . . . . . . . . . . . . . . . Disclaimer: Intended Use . . .                                                     |       |
|                 | 9.6 9.7                                                                                                      | . . . . . . . . . . . . . . . . . .                                                                                                       | 18    |
|                 |                                                                                                              | Collateral Documents & Tools . . . . . . . . . . . . . . . . . . .                                                                        | 19    |
| 10              | Revision History 10.1                                                                                        | Revision History 10.1                                                                                                                     | 20    |
|                 |                                                                                                              | . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                         | 20    |
|                 | Hardware Revision 10.2 Document Revision                                                                     | . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                         | 20    |

<!-- image -->

## 1 Order Codes

Order Code

| QSH4218-35-10-027-10k   | QSH4218-35-10-027-10000-AT   | Motor + Encoder Module, NEMA17 2- phase stepper motor (1.0A / 0.27Nm) with incremental encoder kit, resolution of 625lpr (40.000cpr), ABN, TTL   | 42x42x51.5   |
|-------------------------|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|--------------|
| QSH4218-51-10-049-10k   | QSH4218-51-10-049-10000-AT   | Motor + Encoder Module, NEMA17 2- phase stepper motor (1.0A / 0.49Nm) with incremental encoder kit, resolution of 625lpr (40.000cpr), ABN, TTL   | 42x42x65     |

Old Order Code

Description

Table 1: Order codes

Other encoder resolutions, signal output types, and customized motor options on request.

<!-- image -->

Size mm (LxWxH)

## 2 Motor Speci/uniFB01cations and Characteristics

TRINAMIC's stepper motors are quality motors for universal use. They feature a long life due to ball bearings and no wearing out parts. These hybrid stepper motors are optimized for microstepping and give a good /uniFB01t to the TRINAMIC family of motor controllers and drivers..

## 2.1 Technical and Mechanical Parameters

- NEMA17 mounting con/uniFB01guration

The main characteristics are:

- /uniFB02ange max. 42.3mm x 42.3mm
- step angle: 1.8°
- 5mmaxis diameter, 20mm axis length
- optimized for microstep operation
- 4 wire connection

Speci/uniFB01cations

| Rated Voltage                       | V           | 5.3     | 5.0     |
|-------------------------------------|-------------|---------|---------|
| Rated Phase Current                 | A           | 1.0     | 1.0     |
| Phase Resistance at 20°C            | Ω           | 5.3     | 5.0     |
| Phase Inductance (typ.)             | mH          | 6.6     | 8.0     |
| Holding Torque (typ.)               | Ncm (oz in) | 27 (38) | 49 (69) |
| Detent Torque                       | Ncm         | 22      | 28      |
| Rotor Inertia                       | g cm 2      | 35      | 68      |
| Weight (Mass)                       | Kg          | 0.22    | 0.35    |
| Insulation Class                    |             | B       | B       |
| Insulation Resistance               | Ω           | 100M    | 100M    |
| Dialectic Strength (for one minute) | VAC         | 500     | 500     |
| Connection Wires                    |             | 4       | 4       |
| Step Angle                          | °           | 1.8     | 1.8     |
| Step angle Accuracy (max.)          | %           | 5       | 5       |
| Flange Size (max.)                  | mm          | 42.3    | 42.3    |
| Motor Length (max.)                 | mm          | 33.5    | 47      |
| Axis Diameter                       | mm          | 5.0     | 5.0     |
| Axis Length (typ.)                  | mm          | 24.0    | 24.0    |
| Axis D-cut (0.5mm depth)            | mm          | 20.0    | 20.0    |
| Shaft Radial Play (450g load)       | mm          | 0.02    | 0.02    |

QSH4218-51-10-049-10k

<!-- image -->

Unit

QSH4218-35-10-027-10k

Shaft Axial Play (450g load)

mm

0.08

Table 2: Electrical and Mechanical Characteristics Motor

| Maximum Radial Force (20 mm from front /uniFB02ange)   | N       | 28        | 28        |
|--------------------------------------------------------|---------|-----------|-----------|
| Maximum Axial Force                                    | N       | 10        | 10        |
| Ambient Temperature                                    | °C      | -20...+50 | -20...+50 |
| Temp Rise (rated current, 2phase on)                   | °C max. | 80        | 80        |
| Winding Thermal Time Constant                          | min     | 18        | 22        |
| Surface Thermal Time Constant                          | min     | 20        | 25        |

## 2.2 Torque-Speed Diagrams

The torque-speed /uniFB01gures detail motor torque characteristics measured in block commutation. Please be careful not to operate the motors outside the blue /uniFB01eld. This is possible for short times only because of a resulting high coil temperature. The motors have insulation class B. The blue /uniFB01eld is described by rated speed and rated torque.

## 2.2.1 QSH4218-35-10-027-10k

Testing conditions: Driver Supply 24V, 1.0A RMS Coil Current, Half Step Operation.

<!-- image -->

Figure 1: QSH4218-35-10-027-10k velocity vs. torque characteristic

<!-- image -->

0.08

## 2.2.2 QSH4218-51-10-049-10k

Testing conditions: Driver Supply 24V, 1.0A RMS Coil Current, Half Step Operation.

<!-- image -->

pps

Figure 2: QSH4218-51-10-049-10k velocity vs. torque characteristics

## 3 Technical Speci/uniFB01cations of the Encoders

## 3.1 Electrical Encoder Parameters

Parameter

| Supply voltage       | 4.5   | 5      | 5.5   | V          |
|----------------------|-------|--------|-------|------------|
| Supply current       |       |        | 90    | mA         |
| Rise/fall time       |       |        | 10    | ns         |
| Frequency            |       |        | 1500  | kHz        |
| Output Voltage "'H"' | 2.4   |        |       | V          |
| Input Voltage "'L"'  |       |        | 0.4   | V          |
| Max. output current  |       |        | 5     | mA         |
| Disc lines           |       | 625    |       | lines      |
| Resolution           |       | 40.000 |       | increments |

Min

Table 3: Electrical Characteristics Encoder

Typ

Max

Unit

<!-- image -->

## 3.2 Mechanical Encoder Parameters

Parameter

Table 4: Mechanical Speci/uniFB01cations

| Hollow Diameter (Symbol D in Drawings)   | 4   |      | mm   |
|------------------------------------------|-----|------|------|
| Starting Torque                          |     | 0.8  | Ncm  |
| Shaft Loading Axial                      |     | 25   | N    |
| Shaft Loading Radial                     |     | 40   | N    |
| Max. RPM                                 |     | 6000 | rpm  |
| Net weight                               | 30  |      | g    |

## 3.3 Environmental Encoder Parameters

Parameter

Table 5: Environmental Speci/uniFB01cations

| Operating Temperature   | -20 - +85°C                |
|-------------------------|----------------------------|
| Storage Temperature     | -20 - +85°C                |
| Operating Humidityl     | RH 85% max, non collecting |
| Shock                   | 490 m/s 2 , 3Dx2 times     |
| Vibration               | 1.2mm, 10-55kHz, 3Dx30min  |
| Protection              | IP40                       |

## 4 Connectors and Signals

## 4.1 Motor Connector

Color

Wire Type

Signal Name

Table 7: Connector and signals of motor

| Black   | UL1430 AWG26   | Coil A / Motor coil A pin 1   |
|---------|----------------|-------------------------------|
| Green   | UL1430 AWG26   | Coil -A / Motor coil A pin 2  |
| Red     | UL1430 AWG26   | Coil B / Motor coil B pin 1   |
| Blue    | UL1430 AWG26   | Coil -B / Motor coil B pin 2  |

Min

Typ

Description

Max

Unit

<!-- image -->

## 4.2 Encoder Connector

Pin Number

Figure 3: Lead wire con/uniFB01guration

<!-- image -->

Color

Wire Type

Signal Name

Table 9: Connector and signals of the encoder

|   1 | Red          | UL2517 AWG28      | VCC    |
|-----|--------------|-------------------|--------|
|   2 | Black        | UL2517 AWG28      | GND    |
|   3 | White        | UL2517 AWG28      | A+     |
|   4 | White/Black  | UL2517 AWG28Black | A-     |
|   5 | Green        | UL2517 AWG28      | B+     |
|   6 | Green/Black  | UL2517 AWG28      | B-     |
|   7 | Yellow       | UL2517 AWG28      | Z+     |
|   8 | Yellow/Black | UL2517 AWG28      | Z-     |
|   9 | Blue         | UL2517 AWG28      | Shield |

The required encoder cable connector is a Molex type 5023800900 CLIK-MATE™crimp housing using Molex type 5023810000 CLIK-MATE™crimp terminals.

<!-- image -->

Figure 4: Connection and circuit diagram for the line driver outputs

<!-- image -->

## 4.3 Wave Form

<!-- image -->

Figure 5: Example wave form for CCW rotation

<!-- image -->

## 5 Mechanical Drawings

Figure 6: Dimensions of motor &amp; encoder kit (all units = mm)

<!-- image -->

Motor Type

Body Length

| QSH4218-35-10-027-10k   | 33.5mm   |
|-------------------------|----------|
| QSH4218-51-10-049-10k   | 47mm     |

Table 11: Motor length

<!-- image -->

Figure 7: Length of motor wires/cables (all units = mm)

<!-- image -->

## 6 Considerations for Operation

The following sections try to help you to correctly set the key operation parameters to get a stable system.

## 6.1 Choosing the best Fitting Motor for an Application

Please refer to the torque vs. velocity diagram to determine the best /uniFB01tting motor, which delivers enough torque at your desired velocities.

For an optimum solution it is important to /uniFB01t the motor to the application and to choose the best mode of operation. The key parameters are desired motor torque and velocity. While the motor holding torque describes the torque at stand-still, and gives a good indication for comparing different motors, it is not the key parameter for the best /uniFB01tting motor. The required torque is a result of static load on the motor, dynamic loads which occur during acceleration/deceleration and loads due to friction. In most applications the load at maximum desired motor velocity is most critical, because of the reduction of motor torque at higher velocity. While the required velocity generally is well known, the required torque often is only roughly known. Generally, longer motors and motors with a larger diameter deliver a higher torque. But, using the same driver voltage for the motor, the larger motor earlier loses torque when increasing motor velocity. This means, that for a high torque at a high motor velocity, the smaller motor might be the better /uniFB01tting solution.

## 6.1.1 Determining the Maximum Torque Required

Try a motor which should roughly /uniFB01t. Take into consideration worst case conditions, i.e. minimum driver supply voltage and minimum driver current, maximum or minimum environment temperature (whichever is worse) and maximum friction of mechanics. Now, consider that you want to be on the safe side, and add some 10 percent safety margin taking into account unknown degradation of mechanics and motor.

## 6.2 Motor Current Settings

The motor torque is proportional to the motor current as long as the current stays at a reasonable level. At the same time, the power consumption of the motor (and driver) is proportional to the square of the motor current. Optimally, the motor should be chosen to bring the required performance at the rated motor current. For a short time, the motor current may be raised above this level to get increased torque, but care has to be taken not to exceed the maximum coil temperature of 130°C respectively a continuous motor operation temperature of 90°C.

<!-- image -->

Percentage of

rated

Percentage

| current   | torque            | motor power dissipa- tion      |                                                                                          |
|-----------|-------------------|--------------------------------|------------------------------------------------------------------------------------------|
| 150%      | ≤ 150%            | 225%                           | Limit operation to a few seconds                                                         |
| 125%      | 125%              | 156%                           | Operation possible for a limited time                                                    |
| 100%      | 100%              | 100% = 2 ∗ I RMSRATED ∗ R COIL | Normal operation                                                                         |
| 85%       | 85%               | 72%                            | Normal operation                                                                         |
| 75%       | 75%               | 56%                            | Normal operation                                                                         |
| 50%       | 50%               | 25%                            | Reduced microstep ex- actness due to torque reducing in the magni- tude of detent torque |
| 38%       | 38%               | 14%                            | see above                                                                                |
| 25%       | 25%               | 6%                             | see above                                                                                |
| 0%        | see detent torque | 0%                             | Motor might lose posi- tion if the application's friction is too low                     |

of motor

Percentage of

Table 13: Motor current settings

## 6.2.1 Choosing the Optimum Current Setting

The TRINAMIC drivers allow setting the motor current for up to three conditions:

Generally, you choose the motor to give the desired performance at nominal current. For short time operation, you might want to increase the motor current to get a higher torque than speci/uniFB01ed for the motor. In a hot environment, you might want to work with a reduced motor current to reduce motor self heating.

- Stand still (choose a low current)
- High acceleration (if increased torque is required: You may choose a current above the nominal setting, but be aware, that the mean power dissipation shall not exceed the motors nominal rating)
- Nominal operation (nominal current)

If you reach the velocity limit, it might be a good idea to reduce the motor current to avoid resonances occurring. Please refer to the information about choosing the driver voltage.

## 6.2.2 Choosing the Standby Current Setting

Most applications do not need much torque during motor stand-still. You should always reduce motor current during stand still. This reduces power dissipation and heat generation. Depending on your application, you typically at least can half power dissipation. There are several aspects why this is possible: In standstill, motor torque is higher than at any other velocity. Thus, you do not need the full current even with a static load! Your application might need no torque at all, but you might need to keep the exact

<!-- image -->

static

Comment

microstep position. Try how low you can go in your application. If the microstep position exactness does not matter for the time of standstill, you might even reduce the motor current to zero, provided that there is no static load on the motor and enough friction to avoid complete position loss.

## 6.3 Motor Driver Supply Voltage

Thedriver supply voltage in many applications cannot be chosen freely, because other components have a /uniFB01xed supply voltage of e.g. 24V DC. If you have possibility to choose the driver supply voltage, please refer to the driver data sheet, and consider that a higher voltage means a higher torque at higher velocity. The motor torque diagrams are measured for a given supply voltage. You typically can scale the velocity axis (steps/sec) proportionally to the supply voltage to adapt the curve, e.g. if the curve is measured for 48V and you consider operation at 24V, half all values on the x-Axis to get an idea of the motor performance. For a chopper driver, consider the following corner values for the driver supply voltage (motor voltage). The table is based on the nominal motor voltage, which normally just has a theoretical background to determine the resistive loss in the motor. Comment on the nominal motor voltage (please refer to motor technical data table):

U COILNOM = I RMSRATED ∗ R COIL

Parameter

Value

Comment

Table 15: Driver supply voltage considerations

| Minimum driver supply voltage       | 2 ∗ U COILNOM                        | Very limited motorvelocity. Only slow movement without torque reduction. Chopper noise might become audible.                                                                                                           |
|-------------------------------------|--------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Optimum driver supply voltage       | ≥ 4 ∗ U COILNOM and ≤ 22 ∗ U COILNOM | Choose the best /uniFB01tting voltage in this range using the mo- tor torque curve and the driver data. You can scale the torque curve proportionally to the ac- tual driver supply voltage.                           |
| Maximum rated driver supply voltage | 25 ∗ U COILNOM                       | When exceeding this value, the magnetic switching losses in the motor reach a relevant magni- tude and the motor might get too hot at nominal current. Thus there is nobene/uniFB01t in further rais- ing the voltage. |

## 6.3.1 Determining if the Given Driver Voltage is Su/uniFB03cient

Measure the motor coil current at maximum desired velocity:

Try to brake the motor and listen to it at different velocities. Does the sound of the motor get raucous or harsh when exceeding some velocity? Then the motor gets into a resonance area. The reason is that the motor back-EMF voltage reaches the supply voltage. Thus, the driver cannot bring the full current into the motor any more. This is typically a sign, that the motor velocity should not be further increased, because resonances and reduced current affect motor torque.

<!-- image -->

- For microstepping: If the waveform is still basically sinusoidal, the motor driver supply voltage is su/uniFB03cient.

If you determine, that the voltage is not su/uniFB03cient, you could either increase the voltage or reduce the current (and thus torque).

- For Fullstepping: If the motor current still reaches a constant plateau, the driver voltage is su/uniFB03cient.

## 6.4 Back EMF (BEMF)

Within SI units, the numeric value of the BEMF constant has the same numeric value as the numeric value of the torque constant. For example, a motor with a torque constant of 1 Nm/A would have a BEMF constant of 1V/rad/s. Turning such a motor with 1 rps (1 rps = 1 revolution per second = 6.28 rad/s) generates a BEMF voltage of 6.28V. The Back EMF constant can be calculated as:

<!-- image -->

One can easily measure the BEMF constant of a two phase stepper motor with a (digital) scope. One just has to measure the voltage of one coil (one phase) when turning the axis of the motor manually. With this, one gets a voltage (amplitude) and a frequency of a periodic voltage signal (sine wave). The full step frequency is 4 times the frequency the measured sine wave.

The voltage is valid as RMS voltage per coil, thus the nominal current INOM is multiplied by 2 in this formula, since the nominal current assumes a full step position, with two coils switched on. The torque is in unit [Nm] where 1Nm = 100cNm = 1000mNm.

## 6.5 Choosing the Commutation Scheme

While the motor performance curves are depicted for fullstepping and halfstepping, most modern drivers provide a microstepping scheme. Microstepping uses a discrete sine and a cosine wave to drive both coils of the motor, and gives a very smooth motor behavior as well as an increased position resolution. The amplitude of the waves is 1.41 times the nominal motor current, while the RMS values equal the nominal motor current. The stepper motor does not make loud steps any more - it turns smoothly! Therefore, 16 microsteps or more are recommended for a smooth operation and the avoidance of resonances. To operate the motor at fullstepping, some considerations should be taken into account.

<!-- image -->

Driver Scheme

Resolution

Velocity Range

Torque

Table 17: Comparing microstepping and fullstepping

| Fullstepping                                                    | 200steps per rota- tion                   | Low to very high. Skip resonance areas in low to medium velocity range   | Full torque if dampener used, otherwise re- duced torque in resonance area   | Audible noise and vibrations especially at low velocities             |
|-----------------------------------------------------------------|-------------------------------------------|--------------------------------------------------------------------------|------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| Halfstepping                                                    | 200steps per rota- tion * 2               | Low to very high. Skip resonance areas in low to medium velocity range   | Full torque if dampener used, otherwise re- duced torque in resonance area   | Audible noise and vibrations especially at low velocities             |
| Microstepping                                                   | 200 * (number of microsteps) per rotation | Low to high                                                              | Reduced torque at very high velocity                                         | Low noise, smooth motor behavior                                      |
| Mixed: Microstep- ping and fullstep- ping for high ve- locities | 200 * (number of microsteps) per rotation | Low to very high                                                         | Full torque                                                                  | At high velocities, there is no audi- ble difference for fullstepping |

Microstepping gives the best performance for most applications and can be considered as state-of-the art. However, fullstepping allows some ten percent higher motor velocities, when compared to microstepping. Acombination of microstepping at low and medium velocities and fullstepping at high velocities gives best performance at all velocities and is most universal. Most Trinamic driver modules support all three modes.

## 6.5.1 Fullstepping

When operating the motor in fullstep, resonances may occur. The resonance frequencies depend on the motor load. When the motor gets into a resonance area, it even might not turn anymore! Thus you should avoid resonance frequencies.

## Note

Do not operate the motor at resonance velocities for extended periods of time. Use a reasonably high acceleration to accelerate to a resonance-free velocity. This avoids the build-up of resonances. When resonances occur at very high velocities, try reducing the current setting.

A resonance dampener might be required, if the resonance frequencies cannot be skipped.

<!-- image -->

Comment

## 7 Figures Index

|    | torque characteristic . . . . . . . . . . 5                                      |
|----|----------------------------------------------------------------------------------|
|  2 | QSH4218-51-10-049-10k velocity vs. torque characteristics . . . . . . . . . 6    |
|  3 | Lead wire con/uniFB01guration . . . . . . . .                                    |
|  4 | 8 Connection and circuit diagram for the line driver outputs . . . . . . . . . 9 |

1

QSH4218-35-10-027-10k velocity

vs.

5

7

6

Example wave form for CCW rotation

Length of

Dimensions of motor &amp; encoder kit units = mm)

.

.

.

.

.

.

.

.

.

.

.

.

.

.

10

motor wires/cables

(all

.

.

.

.

.

.

.

.

.

.

9

10

<!-- image -->

.

(all units = mm)

.

.

.

## 8 Tables Index

| 2   | Electrical and Mechanical Characteris- tics Motor . . . . . . . . . . . . . . . . . . .   | 5 13 15   | Motor current settings . . . . . . . . .                               | 12   |
|-----|-------------------------------------------------------------------------------------------|-----------|------------------------------------------------------------------------|------|
| 3   | Electrical Characteristics Encoder Mechanical Speci/uniFB01cations . . . . . . . .        | 6 7 17    | Driver supply voltage considerations full-                             | 13   |
| 4 5 |                                                                                           | 7         | Comparing microstepping and stepping . . . . . . . . . . . . . . . . . | 15   |
| 7   | Environmental Speci/uniFB01cations . . .                                                  | 7         | Hardware Revision .                                                    | 20   |
|     | . Connector and signals of motor Connector and signals of the                             | 8 18 19   | . . . . . . . . . . .                                                  |      |
| 9   | . . . encoder                                                                             |           | Document Revision . . . . . . . . . .                                  | 20   |

.

.

.

.

.

.

.

.

.

.

10

<!-- image -->

1

Order codes

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

3

11

Motor length .

.

.

.

.

## 9 Supplemental Directives

## 9.1 Producer Information

## 9.2 Copyright

Redistribution of sources or derived formats (for example, Portable Document Format or Hypertext Markup Language) must retain the above copyright notice, and the complete data sheet, user manual, and documentation of this product including associated application notes; and a reference to other available product-related documentation.

TRINAMIC owns the content of this user manual in its entirety, including but not limited to pictures, logos, trademarks, and resources. © Copyright 2023 TRINAMIC. All rights reserved. Electronically published by TRINAMIC, Germany.

## 9.3 Trademark Designations and Symbols

This Hardware Manual is a non-commercial publication that seeks to provide concise scienti/uniFB01c and technical user information to the target user. Thus, trademark designations and symbols are only entered in the Short Spec of this document that introduces the product at a quick glance. The trademark designation /symbol is also entered when the product or feature name occurs for the /uniFB01rst time in the document. All trademarks and brand names used are property of their respective owners.

Trademark designations and symbols used in this documentation indicate that a product or feature is owned and registered as trademark and/or patent either by TRINAMIC or by other manufacturers, whose products are used or referred to in combination with TRINAMIC's products and TRINAMIC's product documentation.

## 9.4 Target User

The Target User knows how to responsibly make use of this product without causing harm to himself or others, and without causing damage to systems or devices, in which the user incorporates the product.

The documentation provided here, is for programmers and engineers only, who are equipped with the necessary skills and have been trained to work with this type of product.

## 9.5 Disclaimer: Life Support Systems

Life support systems are equipment intended to support or sustain life, and whose failure to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the speci/uniFB01c written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.

Information given in this document is believed to be accurate and reliable. However, no responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use. Speci/uniFB01cations are subject to change without notice.

## 9.6 Disclaimer: Intended Use

The data speci/uniFB01ed in this user manual is intended solely for the purpose of product description. No representations or warranties, either express or implied, of merchantability, /uniFB01tness for a particular purpose

<!-- image -->

or of any other nature are made hereunder with respect to information/speci/uniFB01cation or the products to which information refers and no guarantee with respect to compliance to the intended use is given.

TRINAMIC products are not designed nor intended for use in military or aerospace applications or environments or in automotive applications unless speci/uniFB01cally designated for such use by TRINAMIC. TRINAMIC conveys no patent, copyright, mask work right or other trade mark right to this product. TRINAMIC assumes no liability for any patent and/or other trade mark rights of a third party resulting from processing or handling of the product and/or any other use of the product.

In particular, this also applies to the stated possible applications or areas of applications of the product. TRINAMIC products are not designed for and must not be used in connection with any applications where the failure of such products would reasonably be expected to result in signi/uniFB01cant personal injury or death (safety-Critical Applications) without TRINAMIC's speci/uniFB01c written consent.

## 9.7 Collateral Documents &amp; Tools

This product documentation is related and/or associated with additional tool kits, /uniFB01rmware and other items, as provided on the product page at: www.trinamic.com.

<!-- image -->

## 10 Revision History

## 10.1 Hardware Revision

Version

Date

Author

## 10.2 Document Revision

Version

Date

Author

|   1.00 | 22.02.2019   | SK   | Initial release.                                                                          |
|--------|--------------|------|-------------------------------------------------------------------------------------------|
|    1.1 | 16.06.2019   | SK   | Resolution corrected.                                                                     |
|    1.2 | 11.12.2019   | SK   | Motor wires type update to UL1430.                                                        |
|    1.3 | 11.08.2020   | SK   | Lpr parameter updated. Motor cable length information added. Thermal time constant added. |
|    1.4 | 16.04.2021   | SK   | Order codes and naming updated.                                                           |
|    1.5 | 24.04.2023   | SK   | Typos and layout corrected.                                                               |

Description

Table 18: Hardware Revision

| 1.00   | 24.01.2019   | TMC   | Initial release   |
|--------|--------------|-------|-------------------|

Description

Table 19: Document Revision

<!-- image -->